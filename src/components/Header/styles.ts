import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 20px;
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

export const Logo = styled(Link)`
  font-size: 1.6rem;
  color: #fff;
  font-weight: 200;
  letter-spacing: 1px;
  text-decoration: none;
  opacity: 0.9;
  z-index: 101;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.$isOpen ? '0' : '-100%'};
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
  font-size: 0.95rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  position: relative;
  padding: 0.3rem 0;
  opacity: 0.9;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    opacity: 1;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &.active {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &::after {
      display: none;
    }
  }
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