import styled from 'styled-components';

export const Section = styled.section`
  padding: 80px 0;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 10px;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`; 