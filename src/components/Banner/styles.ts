import styled, { createGlobalStyle } from 'styled-components';

export const BannerContainer = styled.div<{ $bgImage: string }>`
  height: 100vh;
  width: 100%;
  position: relative;
  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: background-image 0.5s ease;
  padding: 0;
  margin: 0;
  color: #fff;
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: #fff;
  margin-bottom: 2rem;
  font-weight: 200;
  letter-spacing: 2px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s forwards;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
  }
`;

export const Subtitle = styled.div`
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: #fff;
  margin-bottom: 3rem;
  font-weight: 200;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s 0.2s forwards;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const Button = styled.button`
  padding: clamp(0.8rem, 2vw, 1.2rem) clamp(2rem, 4vw, 4rem);
  font-size: clamp(0.9rem, 1.5vw, 1.2rem);
  color: #fff;
  border: 1px solid #fff;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 300;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s 0.4s forwards;

  &:hover {
    background: #fff;
    color: #000;
  }
`;

export const Indicators = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 2;
  width: 100%;
  justify-content: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    bottom: 20px;
    gap: 8px;
  }
`;

export const Indicator = styled.div<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.$active ? '#fff' : 'rgba(255,255,255,0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 6px;
    height: 6px;
  }
`;

// 添加动画关键帧
const fadeInUpKeyframes = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// 将动画添加到全局样式中
export const GlobalAnimations = createGlobalStyle`
  ${fadeInUpKeyframes}
`; 