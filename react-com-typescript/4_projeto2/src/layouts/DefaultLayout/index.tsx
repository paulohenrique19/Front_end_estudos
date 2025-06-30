import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/index.tsx'

//import { LayoutContainer } from './styles'

export const DefaultLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
    
  );
};
