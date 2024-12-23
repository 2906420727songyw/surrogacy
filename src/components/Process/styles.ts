import styled from 'styled-components';

export const ProcessContainer = styled.section`
  width: 100%;
  background-color: #f5f5f5;
  padding: 6rem 0;
`;

export const ProcessContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 4rem;
`;

export const ProcessItem = styled.div`
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1rem;
    font-weight: 300;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    line-height: 1.8;
  }

  &:last-child {
    border-bottom: none;
  }
`; 