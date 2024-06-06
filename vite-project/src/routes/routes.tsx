import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../views/ErrorPage.tsx'
import UserList from '../views/UserList.tsx'
import UserDetail from '../views/UserDetail.tsx'


export const router = createBrowserRouter([
{
  path: '/',
  element: <UserList />,
  errorElement: <ErrorPage />
},
{
    path: 'user/:id',
    element: <UserDetail />,
  },

])
