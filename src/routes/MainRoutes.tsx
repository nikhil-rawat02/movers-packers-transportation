import { useEffect } from 'react'
import { useNavigate, useRoutes } from 'react-router-dom'
// import MainLayout from '../layout/MainLayout'
// import Loadable from '../layout/ui-components/Loadable'
import MainLayout from '../layout/MainLayout'
// import { logoutUser } from '../store/actions/auth'

// const PageNotFound = Loadable(lazy(() => import('../views/extra/NotFound')))

// ==============================|| MAIN ROUTING ||============================== //

export default function MainRoutes() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.get('jbv-token')) {
      navigate('/')
      // dispatch(logoutUser())
    }

  }, [])

  const list = {
    path: '/',
    element: <MainLayout />,
    children: [
      // { path: '/', element: <Website /> },
      // { path: '*', element: <PageNotFound /> }
    ]
  }
  return useRoutes([list])
}
