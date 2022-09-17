// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './App.css';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import Login from './login';
import MainLayout from '../layout';
import { AuthProvider } from '../context/AuthContext';
import MediaLibary from './media';
import Profile from './profile';

export function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<MainLayout>das</MainLayout>} />
        <Route path="/sales" element={<MainLayout>sa</MainLayout>} />
        <Route path="/customers" element={<MainLayout>customer</MainLayout>} />
        <Route path="/ticket" element={<MainLayout>ti</MainLayout>} />
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
