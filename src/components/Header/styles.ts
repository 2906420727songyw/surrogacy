import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  padding: 1.2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  background: transparent;
  transition: all 0.3s ease;

  &.scrolled {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 0.8rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

export const Logo = styled.div`
  font-size: 1.4rem;
  color: #fff;
  font-weight: 300;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => (props.$isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    gap: 0;
    padding: 5rem 2rem;
    transition: right 0.3s ease;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 300;
  margin-right: 1rem;
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 101;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${props => props.$isOpen ? 1 : 0};
    visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
    z-index: 99;
  }
`;

export const TopBar = styled.div`
  background-color: #A66E65;
  height: 40px;
  width: 100%;
  z-index: 101;
  margin: 0;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 0.2rem;

  &:hover {
    text-decoration: underline;
  }
`; 