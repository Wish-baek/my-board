import { HomeIcon, PlusIcon, SettingsIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='fixed bottom-0 flex h-20 w-full items-center justify-between border-t border-gray-500 px-20'>
      <Link to='/'>
        <HomeIcon />
      </Link>
      <Link to='write'>
        <PlusIcon />
      </Link>
      <Link to='setting'>
        <SettingsIcon />
      </Link>
    </div>
  )
}
