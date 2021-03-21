import * as React from 'react'
import { Header } from '../'

export interface ILayoutProps {
  children: React.ReactElement | React.ReactElement[]
}

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div className='container mx-auto min-h-full px-2 pt-16'>
        <div className='main-content py-4'>{children}</div>
      </div>
      {/* <Footer /> */}
    </>
  )
}
export default Layout
