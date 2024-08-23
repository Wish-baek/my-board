import { Layout } from '@/pages/common/layout'
import { HomePage } from '@/pages/home-page'
import { WritePage } from '@/pages/write-page'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'write', element: <WritePage /> },
    ],
  },
])
