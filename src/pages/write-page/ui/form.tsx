import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { FormItem } from './form-item'
import { formSchema } from '@/types'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

type Props = {
  defaultValues?: Form
  onRegister: (values: Form) => void
}

export const Form = ({ defaultValues, onRegister }: Props) => {
  const navigate = useNavigate()
  const id = uuidv4()
  const [isViewMode, setIsViewMode] = useState(!!defaultValues)
  const { register, handleSubmit, watch, setValue } = useForm<Form>({
    defaultValues: defaultValues ? { ...defaultValues, date: new Date(defaultValues?.date) } : { id, date: new Date() },
    resolver: zodResolver(formSchema),
  })

  const date = watch('date')
  const content = watch('content')

  return (
    <div className='ㅔㅌ-4 flex flex-col gap-4 p-4'>
      <div className='flex flex-col gap-4'>
        <FormItem
          text='날짜'
          component={
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={isViewMode ? 'ghost' : 'outline'}
                  disabled={isViewMode}
                  className={cn('w-full items-center justify-start text-left', !date && 'text-muted-foreground')}
                >
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {date ? dayjs(date).format('YYYY.MM.DD') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0'>
                <Calendar
                  mode='single'
                  selected={date}
                  onSelect={(date?: Date) => {
                    if (!date) return
                    setValue('date', date)
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          }
        />
        <FormItem
          text='제목'
          component={<Input {...register('title')} className={cn(isViewMode && 'border-none')} disabled={isViewMode} />}
        />
        <FormItem
          text='내용'
          component={
            isViewMode ? (
              <div className='px-3 py-2 text-sm'>{content}</div>
            ) : (
              <Textarea {...register('content')} className='h-full' />
            )
          }
        />
      </div>
      <div className='flex justify-end gap-2'>
        <Button variant='secondary' onClick={() => navigate(-1)}>
          뒤로가기
        </Button>
        <Button
          onClick={
            isViewMode
              ? () => setIsViewMode(false)
              : handleSubmit((values) => {
                  onRegister(values)
                  setIsViewMode(true)
                })
          }
        >
          {isViewMode ? '편집' : '작성'}
        </Button>
      </div>
    </div>
  )
}
