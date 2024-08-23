import { useNavigate, useSearchParams } from 'react-router-dom'
import { Form } from './ui/form'

export const WritePage = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  const items: Form[] = JSON.parse(localStorage.getItem('items') ?? '[]')
  const defaultValues = items.find((item) => item.id === id)
  const navigate = useNavigate()

  const onRegister = (values: Form) => {
    const originItems = localStorage.getItem('items')
    if (id) {
      const newItems = [
        ...(originItems
          ? (JSON.parse(originItems) as Form[]).map((item) => {
              return item.id === id ? values : item
            })
          : []),
      ]
      localStorage.setItem('items', JSON.stringify(newItems))
      return
    }

    const newItems = [...(originItems ? JSON.parse(originItems) : []), values]

    localStorage.setItem('items', JSON.stringify(newItems))
  }

  const onDelete = () => {
    const originItems = localStorage.getItem('items')
    const newItems = [...(originItems ? (JSON.parse(originItems) as Form[]).filter((item) => item.id !== id) : [])]
    localStorage.setItem('items', JSON.stringify(newItems))
    navigate('/')
  }

  return (
    <div>
      <Form onRegister={onRegister} onDelete={onDelete} defaultValues={defaultValues} />
    </div>
  )
}
