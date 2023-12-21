import { useEffect } from 'react'
import { useNavigate, useRoutes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
// import Loadable from '../layout/ui-components/Loadable'
// import { logoutUser } from '../store/actions/auth'

// const Revenue = Loadable(lazy(() => import('../views/revenue')))

export default function AdminRoutes() {

  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.get('jbv-token')) {
      navigate('/')
      // dispatch(logoutUser() as any)
    }
  }, [])

  const list = {
    path: '/',
    element: <MainLayout />,
    children: [
      // { path: '/', element: <Revenue /> },
      // { path: '*', element: <PageNotFound /> }
    ]
  }
  return useRoutes([list])
}
