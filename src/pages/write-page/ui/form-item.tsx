import { cn } from '@/lib/utils'

type Props = {
  text: string
  component: React.ReactNode
}

export const FormItem = ({ text, component }: Props) => {
  return (
    <div className={cn('flex flex-col items-start gap-2')}>
      <div className='w-fit text-nowrap'>{text}</div>
      {component}
    </div>
  )
}
