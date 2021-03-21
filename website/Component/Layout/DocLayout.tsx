/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Layout } from '..'
export interface IDocLayout {
  children: React.ReactElement | React.ReactElement[]
}
const DocLayout = ({ children }: IDocLayout) => {
  const router = useRouter()
  return (
    <Layout>
      <div className='flex '>
        <div className='w-2/6 2xl:w-1/6'>
          <div className='fixed' style={{ width: '240px' }}>
            <h2 className='font-bold text-text text-lg'>Usage</h2>
            <div className='pl-2'>
              <Link href='/docs/get-started'>
                <a className='block text-text hover:text-primary  my-2'>
                  Get started
                </a>
              </Link>
              <Link href='/docs/props'>
                <a className='block text-text hover:text-primary  my-2'>
                  Props
                </a>
              </Link>
              <Link href='/docs/customization'>
                <a className='block text-text hover:text-primary  my-2'>
                  Customization
                </a>
              </Link>
              <Link href='/docs/utilities'>
                <a className='block text-text hover:text-primary  my-2'>
                  Utilities
                </a>
              </Link>
              <Link href='/docs/typescript'>
                <a className='block text-text hover:text-primary  my-2'>
                  Typescript
                </a>
              </Link>
              <Link href='/docs/examples'>
                <a className='block text-text hover:text-primary  my-2'>
                  Examples
                </a>
              </Link>
              {/* {router.pathname.includes('/examples') && (
                <div className='hidden md:block'>
                  <a
                    className={`block pl-5 text-sm pb-2 hover:text-primary leading-snug ${
                      hash.includes('#selectsingleday') ? 'is-active' : ''
                    }`}
                    href='#selectSingleDay'
                  >
                    Single day
                  </a>
                  <a
                    className={`block pl-5 text-sm pb-2 hover:text-primary leading-snug ${
                      hash.includes('#singledaywithinitialdate') && 'is-active'
                    }`}
                    href='#SingleDayWithInitialDate'
                  >
                    Single day with initial date
                  </a>
                  <a
                    className={`block pl-5 text-sm pb-2 hover:text-primary leading-snug ${
                      hash.includes('#updateinitialdate') && 'is-active'
                    }`}
                    href='#updateInitialDate'
                  >
                    update initial date
                  </a>

                  <a
                    className={`block pl-5 text-sm pb-2 hover:text-primary leading-snug ${
                      hash.includes('#selectsinglepersian') && 'is-active'
                    }`}
                    href='#selectSinglePersian(Jalali)day'
                  >
                    Jalali day
                  </a>
                  <a
                    className={`block pl-5 text-sm pb-2 hover:text-primary leading-snug ${
                      hash.includes('#selectalistofdaysbetweentwodays') &&
                      'is-active'
                    }`}
                    href='#selectAListOfDaysBetweenTwoDays'
                  >
                    Select a list of days between two days
                  </a>
                  <a
                    className={`block pl-5 text-sm pb-2 hover:text-primary leading-snug ${
                      hash.includes('#rangeofdayswithinitialdate') &&
                      'is-active'
                    }`}
                    href='#rangeOfDaysWithInitialDate '
                  >
                    Range of days with initial date
                  </a>
                  <a
                    className={`block pl-5 text-sm pb-2 hover:text-primary leading-snug ${
                      hash.includes('#selectmultidays') && 'is-active'
                    }`}
                    href='#selectMultiDays'
                  >
                    Select multi days
                  </a>
                  <a
                    className={`block pl-5 text-sm pb-2 hover:text-primary leading-snug ${
                      hash.includes('#multidayswithinitialdate') && 'is-active'
                    }`}
                    href='#multiDaysWithInitialDate '
                  >
                    Multi days with initial date
                  </a>
                  <a
                    className={`block pl-5 text-sm pb-2 hover:text-primary leading-snug ${
                      hash.includes('#singledaywithtime') && 'is-active'
                    }`}
                    href='#singleDayWithTime'
                  >
                    Single day with time
                  </a>
                  <a
                    className={`block pl-5 text-sm pb-2 hover:text-primary leading-snug ${
                      hash.includes('#showweekendclearbtnandtodaybtnoptions') &&
                      'is-active'
                    }`}
                    href='#showWeekendClearBtnAndTodayBtnOptions'
                  >
                    ShowWeekend, clearBtn and todayBtn options
                  </a>
                  <a
                    className={`block pl-5 text-sm pb-2 hover:text-primary leading-snug ${
                      hash.includes('#opencloseandchangecallbackapi') &&
                      'is-active'
                    }`}
                    href='#openCloseAndChangeCallbackApi'
                  >
                    Open, close and change callback api
                  </a>
                  <a
                    className={`block pl-5 text-sm pb-2 hover:text-primary leading-snug ${
                      hash.includes('#setminimumandmaximumdate') && 'is-active'
                    }`}
                    href='#setMinimumAndMaximumDate'
                  >
                    Set minimum and maximum date
                  </a>
                  <a
                    className={`block pl-5 text-sm pb-2 hover:text-primary leading-snug ${
                      hash.includes('#setalistofdisableddates') && 'is-active'
                    }`}
                    href='#setAListOfDisabledDates'
                  >
                    Set a list of disabled dates
                  </a>
                  <a
                    className={`block pl-5 text-sm pb-2 hover:text-primary leading-snug ${
                      hash.includes('#withoutinput') && 'is-active'
                    }`}
                    href='#WithoutInput'
                  >
                    Without input
                  </a>
                  <a
                    className={`block pl-5 text-sm pb-2 hover:text-primary leading-snug ${
                      hash.includes('#customcalender') && 'is-active'
                    }`}
                    href='#CustomCalender'
                  >
                    Custom calender
                  </a>
                </div>
              )} */}
            </div>
          </div>
        </div>
        <div
          className='w-4/6 2xl:w-5/6 pl-4 2xl:pl-12  xl:pl-6'
          // style={{ width: 'clac(100% - 240px)', marginLeft: '240px' }}
        >
          {children}
        </div>
      </div>
    </Layout>
  )
}

export default DocLayout
