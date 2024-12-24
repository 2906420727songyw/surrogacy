import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeaderContainer, HeaderContent, Logo, Nav, NavLink, MenuButton, Overlay,  Button } from './styles';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <HeaderContainer className={scrolled ? 'scrolled' : ''}>
        <HeaderContent>
          <Logo onClick={() => navigate('/')}>Sapling Surrogacy</Logo>
          <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </MenuButton>
          <Nav $isOpen={isMenuOpen}>
            <NavLink 
              to="/become-parent" 
              className={location.pathname === '/become-parent' ? 'active' : ''}
            >
              成为准父母
            </NavLink>
            <NavLink 
              to="/become-surrogate" 
              className={location.pathname === '/become-surrogate' ? 'active' : ''}
            >
              成为代孕妈妈
            </NavLink>
            <NavLink 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >
              关于我们
            </NavLink>
            <NavLink 
              to="/news" 
              className={location.pathname === '/news' ? 'active' : ''}
            >
              资讯
            </NavLink>
            <NavLink 
              to="/program" 
              className={location.pathname === '/program' ? 'active' : ''}
            >
              辅导计划
            </NavLink>
            <NavLink 
              to="/career" 
              className={location.pathname === '/career' ? 'active' : ''}
            >
              职业生涯
            </NavLink>
          </Nav>
          <div>
            <Button>登入</Button>
            <Button>搜索</Button>
          </div>
        </HeaderContent>
      </HeaderContainer>
      <Overlay $isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header; 