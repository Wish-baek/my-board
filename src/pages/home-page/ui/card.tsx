import dayjs from 'dayjs'

type Props = {
  item: Form
}

export const Card = ({ item }: Props) => {
  return (
    <div className='flex max-h-40 w-full flex-col gap-2 overflow-hidden text-ellipsis rounded-lg border border-gray-500 p-4'>
      <div className='flex justify-between'>
        <div>{dayjs(item.date).format('YYYY.MM.DD')}</div>
        <div className='max-w-32 overflow-hidden text-ellipsis whitespace-nowrap'>{item.title}</div>
      </div>
      <div className='text-overflow text-gray-500'>{item.content}</div>
    </div>
  )
}
