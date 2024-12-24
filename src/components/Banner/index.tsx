import {
  BannerContainer,
  BannerContent,
  Title,
  Subtitle,
  Button,
  GlobalAnimations
} from './styles';

interface BannerProps {
  title: string;
  subtitle: string;
  bgImage: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, bgImage }) => {
  return (
    <>
      <GlobalAnimations />
      <BannerContainer $bgImage={bgImage}>
        <BannerContent>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Button>了解更多</Button>
        </BannerContent>
      </BannerContainer>
    </>
  );
};

export default Banner; 