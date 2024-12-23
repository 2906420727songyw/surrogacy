import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LayoutContainer, Main } from './styles';

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout; 