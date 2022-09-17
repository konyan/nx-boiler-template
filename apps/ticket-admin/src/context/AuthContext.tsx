import { loginType } from '@dh-ticketing/shared-modal';
import { useLocalStorage } from 'libs/shared-hooks/src';
import { createContext, ReactNode, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocalService } from '../api/nodeServer';

const AuthContext = createContext<any>({});
interface AuthProviderProps {
  children: ReactNode;
}
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage('user', null);
  const [token, setToken] = useLocalStorage('accessToken', null);
  const navigate = useNavigate();

  const login = async (data: loginType) => {
    LocalService.post('/admin/login', data).then((res: any) => {
      setToken(res.data.access_token);
      // setUser(res.data.user)
      navigate('/admin/dashboard', { replace: true });
    });
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      token,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
