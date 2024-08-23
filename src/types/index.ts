import { z } from 'zod'

export const formSchema = z.object({
  id: z.string(),
  date: z.date(),
  title: z.string().min(1),
  content: z.string().min(1),
})

declare global {
  type Form = z.infer<typeof formSchema>
}
