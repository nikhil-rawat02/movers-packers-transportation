import React from 'react';
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './App.css';
import themes from './themes'
import { Box } from '@mui/material';
import { UserType } from './utils/constants';
import AuthenticationRoutes from './routes/AuthenticationRoutes';
import AdminRoutes from './routes/AdminRoutes';
import MainRoutes from './routes/MainRoutes';

function App() {

  const user: any = useSelector((state: any) => state.authReducer)

  return (
    <ThemeProvider theme={themes()}>
      <BrowserRouter basename="/">
        <Box>
          {/* <MainRoutes /> */}
          {user?.isLoggedIn ? <AppContent user={user} /> : <AuthenticationRoutes />}
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

function AppContent({ user }: any) {

  return <Box>{user?.userType === UserType.ADMIN ? <AdminRoutes /> : <MainRoutes />}</Box>
}

export default App;
