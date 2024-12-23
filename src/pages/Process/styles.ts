import styled from 'styled-components';

export const ProcessContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(154, 132, 120, 0.9);
  padding: 120px 0 6rem;
`;

export const ProcessContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  color: #fff;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  font-weight: 300;
  letter-spacing: 1px;
`;

export const Description = styled.div`
  h3 {
    font-size: 1.8rem;
    margin: 3rem 0 1.5rem;
    font-weight: 300;
    letter-spacing: 0.5px;

    &:first-child {
      margin-top: 0;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1rem;
    font-weight: 300;
    letter-spacing: 0.5px;
    opacity: 0.9;

    &:last-child {
      margin-bottom: 0;
    }
  }
`; 