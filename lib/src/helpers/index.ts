import PersianDate from 'persian-date'
// import PersianDate from 'persian-date'
import { useLangOption } from '../hooks/useLangOption'
import { IDay, IRange, ITime, ITimeRange } from '../Types/index'

export const getNumberOfDaysInMonth = (
  year: number,
  month: number,
  local?: string
): number => {
  if (local === 'fa') {
    return new PersianDate([year, month + 1]).daysInMonth()
  } else {
    return new Date(year, month + 1, 0).getDate()
  }
}

export const genFullDay = (year: number, month: number, day: number) => {
  return `${year}${addZero(month)}${addZero(day)}`
}

export const genFullIDay = (
  date: IDay | null | undefined,
  isCorrectMonth: boolean = false,
  withTime?: boolean
) => {
  if (date) {
    if (withTime && date.hours && date.minutes) {
      return `${date.year}/${addZero(
        date.month + (isCorrectMonth ? +1 : 0)
      )}/${addZero(date.day)} ${addZero(date.hours)}:${addZero(date.minutes)}`
    } else {
      return `${date.year}/${addZero(
        date.month + (isCorrectMonth ? +1 : 0)
      )}/${addZero(date.day)}`
    }
  }
  return ''
}

export const genDayObject = (year: number, month: number, day: number) => {
  return {
    year: year,
    month: month,
    day: day,
    fullDay: genFullDay(year, month, day)
  }
}

export const getWeekday = (number: number, local: string) => {
  const { WEEK_DAY_SHORT } = useLangOption(local)
  const weekDay = WEEK_DAY_SHORT[number]
  return {
    weekDay,
    weekDayIndex: WEEK_DAY_SHORT.indexOf(weekDay)
  }
}

// export const todayObject = () => {
//   const todayDate = new Date()
//   const today = {
//     year: todayDate.getFullYear(),
//     month: todayDate.getMonth(),
//     day: todayDate.getDate(),
//     hours: todayDate.getHours(),
//     minutes: todayDate.getMinutes()
//   }
//   return today
// }

export const getPreviousSundayDay = (date: IDay, local: string) => {
  const { getDay, getDayOfMonth, today, setDayOfMonth } = useLangOption(local)
  const day = getDay(date)
  const dayOfMonth = getDayOfMonth(date)
  const prevSunday = today()
  let previousSundayDay
  if (day === 0) {
    previousSundayDay = setDayOfMonth(prevSunday, dayOfMonth - 7)
  } else {
    previousSundayDay = setDayOfMonth(prevSunday, dayOfMonth - day)
  }
  if (local === 'fa') {
    return getDayOfMonth(previousSundayDay.State.persianAstro)
  }
  const temp = {
    year: previousSundayDay.getFullYear(),
    month: previousSundayDay.getMonth(),
    day: previousSundayDay.getDate()
  }
  return getDayOfMonth(temp)
}

export const getDateTimeStamp = (date: IDay, local?: string) => {
  if (local === 'fa') {
    return new PersianDate([date.year, date.month + 1, date.day])
  }
  return new Date(date.year, date.month, date.day).setHours(0, 0, 0, 0)
}
export const compareDateEN = (date1: IDay, date2: IDay) => {
  const fixDate1 = new Date(date1.year, date1.month, date1.day)
  const fixDate2 = new Date(date2.year, date2.month, date2.day)
  if (fixDate1 > fixDate2) {
    return 1
  } else if (fixDate1 < fixDate2) {
    return 2
  }
  return 0
}
export const compareDateFA = (date1: IDay, date2: IDay) => {
  const fixDate1 = new PersianDate([date1.year, date1.month + 1, date1.day])
  const fixDate2 = new PersianDate([date2.year, date2.month + 1, date2.day])
  if (fixDate1.diff(fixDate2) > 0) {
    return 1
  } else if (fixDate1.diff(fixDate2) < 0) {
    return 2
  }
  return 0
}

export const handelInitialValues = (
  initValue: any,
  correctedType: string,
  local: string,
  maxDate?: IDay
) => {
  let initTime
  let initCalender
  let today = new Date()
  let todayP = new PersianDate(today).State.persianAstro

  if (maxDate) {
    today = new Date(maxDate.year, maxDate.month, maxDate.day)
    todayP = new PersianDate([maxDate.year, maxDate.month, maxDate.day]).State
      .persianAstro
  }

  if (correctedType === 'single') {
    if (initValue?.year) {
      initCalender = {
        year: initValue.year,
        month: initValue.month,
        day: initValue.day
      }
    }
    initTime = {
      hours: initValue?.hours || today.getHours(),
      minutes: initValue?.minutes || today.getMinutes()
    }
  }
  if (correctedType === 'range') {
    if (initValue?.from) {
      initCalender = {
        year: initValue.from.year,
        month: initValue.from.month,
        day: initValue.from.day
      }
    }

    initTime = {
      from: {
        hours: initValue?.from?.hours || today.getHours(),
        minutes: initValue?.from?.minutes || today.getMinutes()
      },
      to: {
        hours: initValue?.to?.hours || today.getHours(),
        minutes: initValue?.to?.minutes || today.getMinutes()
      }
    }
  }
  if (correctedType === 'multi') {
    if (initValue && initValue.length && initValue[0]?.year) {
      initCalender = {
        year: initValue[0].year,
        month: initValue[0].month,
        day: initValue[0].day
      }
    }
  }
  if (!initCalender) {
    if (local === 'fa') {
      initCalender = {
        year: todayP.year,
        month: todayP.month,
        day: todayP.day
      }
    } else {
      initCalender = {
        year: today.getFullYear(),
        month: today.getMonth(),
        day: today.getDate()
      }
    }
  }
  return { initCalender, initTime }
}

export const mergeProviders = (
  onChange: (date: any) => void,
  type: string,
  selectedDate: IDay | IRange | IDay[] | null | undefined,
  selectedTime: ITime | ITimeRange | null | undefined,
  onCalenderChange?: any,
  withTime?: boolean
) => {
  let updatedValue = null
  if (type === 'single') {
    if ((selectedDate as IDay)?.year) {
      if (withTime) {
        updatedValue = {
          ...selectedDate,
          month: (selectedDate as IDay)?.month + 1,
          ...selectedTime
        }
      } else {
        updatedValue = {
          ...selectedDate,
          month: (selectedDate as IDay)?.month + 1
        }
      }
    }
  }
  if (type === 'range') {
    if (
      selectedDate &&
      (selectedDate as IRange).from?.year &&
      (selectedDate as IRange).to?.year
    ) {
      if (withTime) {
        updatedValue = {
          from: {
            ...(selectedDate as IRange).from,
            month: (selectedDate as IRange).from?.month! + 1,
            ...(selectedTime as ITimeRange).from
          },
          to: {
            ...(selectedDate as IRange).to,
            month: (selectedDate as IRange).to?.month! + 1,
            ...(selectedTime as ITimeRange).to
          }
        }
      } else {
        updatedValue = {
          from: {
            ...(selectedDate as IRange).from,
            month: (selectedDate as IRange).from?.month! + 1
          },
          to: {
            ...(selectedDate as IRange).to,
            month: (selectedDate as IRange).to?.month! + 1
          }
        }
      }
    }
  } else if (type === 'multi' && selectedDate) {
    updatedValue = (selectedDate as IDay[]).map((d: IDay) => {
      return {
        ...d,
        month: d.month + 1
      }
    })
  }
  onChange(updatedValue || selectedDate)
  if (onCalenderChange) {
    if (type === 'range') {
      if ((selectedDate as IRange).from && (selectedDate as IRange).to) {
        onCalenderChange(updatedValue)
      }
    } else {
      onCalenderChange(updatedValue)
    }
  }
}

export const addZero = (number: number) => {
  if (number < 10) {
    return `0${number}`
  } else return number
}

export const isDayBetween = (
  min: IDay,
  day: IDay,
  max: IDay,
  local: string
) => {
  const selectCompar = {
    en: compareDateEN,
    fa: compareDateFA
  }
  if (
    selectCompar[local](min, day) === 1 &&
    selectCompar[local](max, day) === 2
  )
    return false
  return true
}

// the worst function in this app
export const checkInputValues = (
  initValue: any,
  correctedLocal: string,
  correctedType: string,
  maxDate?: IDay,
  minDate?: IDay,
  disabledDates?: IDay[]
) => {
  const selectCompar = {
    en: compareDateEN,
    fa: compareDateFA
  }

  if (!(correctedLocal === 'en' || correctedLocal === 'fa')) {
    throw Error('Local must be "en" or "fa".')
  }
  if (
    !(
      correctedType === 'single' ||
      correctedType === 'range' ||
      correctedType === 'multi'
    )
  ) {
    throw Error('Type must be "single" or "range" or "multi".')
  }
  if (
    maxDate &&
    minDate &&
    selectCompar[correctedLocal](maxDate, minDate) !== 1
  ) {
    throw Error('Max date must be greater than min date.')
  }
  if (
    (correctedType === 'single' &&
      initValue &&
      !('year' in initValue && 'month' in initValue && 'day' in initValue)) ||
    initValue === 'null' ||
    initValue === 'undefined'
  ) {
    throw Error(
      'Default date in single type must contain at least "year", "month", "day" or null.'
    )
  }
  if (
    correctedType === 'range' &&
    initValue &&
    (!('to' in initValue) || !('from' in initValue))
  ) {
    throw Error(
      'Default date in range type must contain "from" and "To" object.'
    )
  }
  if (
    correctedType === 'range' &&
    initValue &&
    selectCompar[correctedLocal](initValue.to, initValue.from) === 2
  ) {
    throw Error('Default "To" date must be grater than default "from" date.')
  }
  if (correctedType === 'multi' && initValue) {
    const isThereAnyWrongDate = initValue.find((date: any) => {
      return !('year' in date) || !('month' in date) || !('day' in date)
    })

    if (isThereAnyWrongDate) {
      throw Error('Default date in multi type must be a list of dates')
    }
  }

  if (maxDate && initValue) {
    if (correctedType === 'single') {
      if (selectCompar[correctedLocal](maxDate, initValue) === 2) {
        throw Error('Max date must be greater than default or selected date.')
      }
    } else if (correctedType === 'range' && initValue.to) {
      if (selectCompar[correctedLocal](maxDate, initValue.to) === 2)
        throw Error(
          'Max date must be greater than default or selected to date.'
        )
    } else if (correctedType === 'multi' && initValue.length) {
      const isThereAnyGreater = initValue.find(
        (date: IDay) => selectCompar[correctedLocal](maxDate, date) === 2
      )
      if (isThereAnyGreater) {
        throw Error(
          'Max date must be greater than default or selected to date.'
        )
      }
    }
  }
  if (minDate && initValue) {
    if (correctedType === 'single') {
      if (selectCompar[correctedLocal](minDate, initValue) === 1) {
        throw Error('Default or selected date must be greater than min date.')
      }
    } else if (correctedType === 'range' && initValue.from) {
      if (selectCompar[correctedLocal](minDate, initValue.from) === 1)
        throw Error('Default or selected date must be greater than min date.')
    } else if (correctedType === 'multi' && initValue.length) {
      const isThereAnyGreater = initValue.find(
        (date: IDay) => selectCompar[correctedLocal](minDate, date) === 1
      )
      if (isThereAnyGreater) {
        throw Error('Default or selected date must be greater than min date.')
      }
    }
  }
  if (disabledDates) {
    if (
      correctedType === 'single' &&
      initValue &&
      disabledDates?.find(
        (date) =>
          genFullDay(date.year, date.month, date.day) ===
          genFullDay(initValue.year, initValue.month, initValue.day)
      )
    ) {
      throw Error('Default Date could not be in disabled list')
    }
    if (
      correctedType === 'range' &&
      initValue &&
      disabledDates?.find(
        (date) =>
          genFullDay(date.year, date.month, date.day) ===
            genFullDay(
              initValue.from.year,
              initValue.from.month,
              initValue.from.day
            ) ||
          genFullDay(date.year, date.month, date.day) ===
            genFullDay(initValue.to.year, initValue.to.month, initValue.to.day)
      )
    ) {
      throw Error(
        '"FROM" or "TO" in Default Date could not be in disabled list.'
      )
    }
    if (
      correctedType === 'multi' &&
      disabledDates?.find((disDate) => {
        return initValue?.find((initDate: IDay) => {
          return (
            genFullDay(disDate.year, disDate.month, disDate.day) ===
            genFullDay(initDate.year, initDate.month, initDate.day)
          )
        })
      })
    ) {
      throw Error('Non of Date in Default Date could not be in disabled list.')
    }
  }
}

export const convertToEn = (date: IDay | null, divider: string = '/') => {
  if (date) {
    const faDate = new PersianDate([
      date?.year,
      date?.month,
      date?.day
    ]).toCalendar('gregorian').State.gregorian
    let fixedDate =
      faDate.year +
      divider +
      addZero(faDate.month + 1) +
      divider +
      addZero(faDate.day)
    if (date.hours !== undefined && date.minutes !== undefined) {
      fixedDate =
        fixedDate + ' ' + addZero(date.hours) + ':' + addZero(date.minutes)
    }
    return fixedDate
  }
  return ''
}
export const convertToFa = (date: IDay | null, divider: string = '/') => {
  if (date) {
    const day = new Date(date.year, date.month - 1, date.day)
    const faDate = new PersianDate(day).State.persianAstro
    let fixedDate =
      faDate.year +
      divider +
      addZero(faDate.month + 1) +
      divider +
      addZero(faDate.day)
    if (date.hours !== undefined && date.minutes !== undefined) {
      fixedDate =
        fixedDate + ' ' + addZero(date.hours) + ':' + addZero(date.minutes)
    }
    return fixedDate
  }
  return ''
}

export const fixedMonth = (date: IDay | undefined) => {
  if (date && date.year) {
    return {
      ...date,
      month: date.month - 1
    }
  }
  return date
}
export const fixedMonthInitValue = (initDate: any, type: string) => {
  let newDate
  if (initDate) {
    if (type === 'single' && initDate.year) {
      newDate = fixedMonth(initDate)
    }
    if (type === 'range' && initDate.from && initDate.to) {
      newDate = {
        from: { ...fixedMonth(initDate.from) },
        to: { ...fixedMonth(initDate.to) }
      }
    }
    if (type === 'multi') {
      newDate = initDate.map((d: IDay) => {
        return { ...fixedMonth(d) }
      })
    }
  }
  return newDate
}

export const toPersianNumber = (englishNumber: number | string): string => {
  if (!englishNumber) return ''

  const persianNumber = String(englishNumber).replace(
    /\d/g,
    (d) => '۰۱۲۳۴۵۶۷۸۹'[d]
  )
  return persianNumber
}
