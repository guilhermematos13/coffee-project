import { Outlet } from 'react-router-dom';
import { Header } from '../Home/components/Header';

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
