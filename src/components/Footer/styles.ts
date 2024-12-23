import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #9a8478;
  color: #fff;
  padding: 3rem 0;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 0 1rem;
`;

export const FooterSection = styled.div`
  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  ul {
    list-style: none;
    li {
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }
  }
`; 