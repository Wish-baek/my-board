import { Outlet } from 'react-router-dom'
import { Header } from './header'
import { Footer } from './footer'

export const Layout = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='py-20'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
