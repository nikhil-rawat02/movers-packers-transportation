import { useRoutes } from 'react-router-dom'
import MinimalLayout from '../layout/MinimalLayout'

export default function AuthenticationRoutes() {
 
  const list = {
    path: '/',
    element: <MinimalLayout />,
    children: [{ path: '*', element: <MinimalLayout /> }]
  }
  return useRoutes([list])
}
