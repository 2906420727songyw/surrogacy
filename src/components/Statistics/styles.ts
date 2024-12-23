import styled from 'styled-components';

export const StatsContainer = styled.section`
  padding: 6rem 0;
  background-color: #9a8478;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 1rem;
    padding: 0 1.5rem;
  }
`;

export const StatItem = styled.div`
  .number {
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 300;
    margin-bottom: 1rem;
  }
  
  .label {
    font-size: clamp(0.9rem, 1.8vw, 1.2rem);
    opacity: 0.9;
  }
`; 