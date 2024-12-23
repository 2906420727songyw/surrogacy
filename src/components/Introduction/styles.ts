import styled from 'styled-components';

export const IntroContainer = styled.section`
  width: 100%;
`;

export const IntroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 2rem;
  color: #333;
  font-weight: 300;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #666;
  line-height: 2;
  max-width: 800px;
  margin: 0 auto;
`;

export const CompanyInfo = styled.div`
  background-color: rgba(154, 132, 120, 0.9);
  padding: 6rem 2rem;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  p {
    font-size: clamp(0.9rem, 1.8vw, 1.1rem);
    line-height: 2;
    margin-bottom: 1rem;
    font-weight: 300;
    letter-spacing: 0.5px;
    opacity: 0.9;
    max-width: 800px;
    margin: 0 auto 1rem;

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      letter-spacing: 0.3px;
    }
  }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ImageItem = styled.div`
  text-align: center;
  
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #333;
  }
`; 