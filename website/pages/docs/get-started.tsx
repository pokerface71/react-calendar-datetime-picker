import { DocLayout } from '../../Component'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
	// dark,
	tomorrowNightEighties
	// atomOneDarkReasonable
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const usageString = `
import  DtPicker  from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'

const DatePicker = () => {
  const [date, setDate] = useState(null)
  return (
      <DtPicker
        onChange={setDate}
        type='single'
        local='en'
        withTime
        showWeekend
      />
  )
}
export default DatePicker
`

const QuickStart = () => {
	return (
		<DocLayout>
			<h1 className='text-3xl mb-6'>Get started:</h1>
			<h2 className='text-xl mb-3'>
				Welcome to react calendar date-time picker documentation
			</h2>
			<p className='text-lg mb-6'>
				This package provides three types for selecting dates, including{' '}
				<strong>a single day</strong>, <strong>range of days </strong>and{' '}
				<strong>multiple days</strong>.
				<br />
				All the three types, like all other props, are available in both
				Gregorian and Jalali calendars.
			</p>
			<section className='my-10'>
				<h2 className='text-2xl mb-3'>Localization:</h2>
				<p className='text-lg mb-1'>
					This package supports Gregorian and Jalali calendars.
					<br />
					'En' and 'Fa' can be assigned as the 'local' props to determine the
					calendar type.
				</p>
			</section>
			<section className='my-10'>
				<h2 className='text-2xl mb-3'>Dependencies:</h2>
				<p className='text-lg mb-1'>
					This package enjoys context api and hooks; therefore, based on react
					documentation you need at least{'  '}
					<code className='bg-text-light text-white rounded'>
						<a
							href='https://reactjs.org/blog/2019/02/06/react-v16.8.0.html'
							target='_blank'
							className='px-2'
							rel='noopener noreferrer'
						>
							React v16.8
						</a>
					</code>
					{'  '}
					or later.
				</p>
				<p className='text-lg mb-1'>
					Moreover, the only dependency used in this package is{' '}
					<a
						href='https://github.com/babakhani/PersianDate'
						className='underline'
						target='_blank'
						rel='noopener noreferrer'
					>
						Persian-date
					</a>{' '}
					and it is just{' '}
					<a
						href='https://bundlephobia.com/result?p=persian-date@1.1.0'
						className='underline'
						target='_blank'
						rel='noopener noreferrer'
					>
						10kb (MINIFIED + GZIPPED)
					</a>
				</p>
			</section>
			<section className='my-10'>
				<h2 className='text-2xl mb-3'>Installation:</h2>
				<p className='text-lg mb-1'>The package can be installed via NPM:</p>
				<div className='w-2/3'>
					<SyntaxHighlighter style={tomorrowNightEighties} className='rounded'>
						{'npm install react-calendar-datetime-picker'}
					</SyntaxHighlighter>
				</div>
				<p className='text-lg mb-1'>Or by using Yarn:</p>
				<div className='w-2/3'>
					<SyntaxHighlighter style={tomorrowNightEighties} className='rounded'>
						{'yarn add react-calendar-datetime-picker'}
					</SyntaxHighlighter>
				</div>
			</section>
			<section className='my-10'>
				<h2 className='text-2xl mb-3'>Usage:</h2>
				<p className='text-lg mb-1'>Here's an example of basic usage:</p>
				<div className='w-2/3'>
					<SyntaxHighlighter
						className='rounded'
						style={tomorrowNightEighties}
						language='javascript '
					>
						{usageString}
					</SyntaxHighlighter>
				</div>
			</section>
		</DocLayout>
	)
}

export default QuickStart
