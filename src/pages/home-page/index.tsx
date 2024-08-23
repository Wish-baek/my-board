import { Link } from 'react-router-dom'
import { Card } from './ui/card'

export const HomePage = () => {
  const items: Form[] = JSON.parse(localStorage.getItem('items') ?? '[]')
  return (
    <div className='flex flex-col gap-4 p-4'>
      {items.map((item) => (
        <Link key={item.id} to={`write?id=${item.id}`}>
          <Card item={item} />
        </Link>
      ))}
    </div>
  )
}
