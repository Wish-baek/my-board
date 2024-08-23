import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <Link to='/' className='header flex h-20 w-full items-center justify-center border-b border-gray-500 pt-2 text-4xl'>
      하루글씨
    </Link>
  )
}
