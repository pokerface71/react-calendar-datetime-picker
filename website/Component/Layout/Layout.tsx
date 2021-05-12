import { Head } from 'next/document'
import * as React from 'react'
import { Header } from '../'
interface IMeta {
	name: string
	content: string
}
export interface ILayoutProps {
	children: React.ReactElement | React.ReactElement[]
	metaName?: IMeta[]
	canonical?: string
}

const Layout = ({
	children,
	metaName,
	canonical
}: ILayoutProps): JSX.Element => {
	return (
		<>
			<Head>
				{metaName &&
					metaName.map((item: IMeta, index: number) => {
						;<meta name={item.name} content={item.content} key={index} />
					})}
				{canonical && <link rel='canonical' href={canonical} />}
			</Head>
			<Header />
			<div className='container mx-auto min-h-full px-2 pt-16'>
				<div className='main-content py-4'>{children}</div>
			</div>
			{/* <Footer /> */}
		</>
	)
}
export default Layout
