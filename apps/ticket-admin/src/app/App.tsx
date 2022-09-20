// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes, Link } from 'react-router-dom';
import Login from './login';
import MainLayout from '../layout';
import { AuthProvider } from '../context/AuthContext';
import MediaLibary from './media';
import Profile from './profile';
import UserList from './user';
import CreateUserPage from './user/create';
import TicketList from './ticket';
import Coupon from './coupon';
import CreateTicket from './ticket/createTicket';

export function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<MainLayout>das</MainLayout>} />
        <Route path="/sales" element={<MainLayout>sa</MainLayout>} />
        <Route path="/customers" element={<MainLayout>customer</MainLayout>} />]
        <Route
          path="/admin/coupon"
          element={
            <MainLayout>
              <Coupon />
            </MainLayout>
          }
        />
        <Route
          path="/admin/ticket"
          element={
            <MainLayout>
              <TicketList />
            </MainLayout>
          }
        />
        <Route
          path="/admin/ticket/create"
          element={
            <MainLayout>
              <CreateTicket />
            </MainLayout>
          }
        />
        <Route path="/setting" element={<MainLayout>setting</MainLayout>} />
        <Route
          path="/admin/media"
          element={
            <MainLayout>
              <MediaLibary />
            </MainLayout>
          }
        />
        <Route
          path="/admin/user"
          element={
            <MainLayout>
              <UserList />
            </MainLayout>
          }
        />
        <Route
          path="/admin/user/create"
          element={
            <MainLayout>
              <CreateUserPage />
            </MainLayout>
          }
        />
        <Route
          path="/admin/profile"
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
