import {
  BannerContainer,
  BannerContent,
  Title,
  Subtitle,
  GlobalAnimations
} from './styles';

interface BannerProps {
  title: string;
  subtitle: string;
  bgImage: string;
  children?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, bgImage, children }) => {
  return (
    <>
      <GlobalAnimations />
      <BannerContainer $bgImage={bgImage}>
        <BannerContent>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          {children}
        </BannerContent>
      </BannerContainer>
    </>
  );
};

export default Banner; 