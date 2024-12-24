import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding-top: 40px;
  min-height: 100vh;
  background-color: #A66E65;
`;

export const Section = styled.section`
  background-image: url('/images/banner1.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  padding: 15px 30px;
  font-size: 1rem;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 5px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`; 