import { useEffect, useState } from 'react';
import {
  BannerContainer,
  BannerContent,
  Title,
  Subtitle,
  Button,
  Indicators,
  Indicator,
  GlobalAnimations
} from './styles';

const bannerData = [
  {
    title: "成为准父母",
    subtitle: "Sapling Surrogacy",
    bgImage: "/images/banner1.jpg"
  },
  {
    title: "成为代孕母亲",
    subtitle: "Sapling Surrogacy",
    bgImage: "/images/banner2.jpg"
  },
  {
    title: "欢迎单身及LGBTQ群体",
    subtitle: "Sapling Surrogacy",
    bgImage: "/images/banner3.jpg"
  }
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <GlobalAnimations />
      <BannerContainer $bgImage={bannerData[currentSlide].bgImage}>
        <BannerContent>
          <Title>{bannerData[currentSlide].title}</Title>
          <Subtitle>{bannerData[currentSlide].subtitle}</Subtitle>
          <Button>了解更多</Button>
        </BannerContent>
        <Indicators>
          {bannerData.map((_, index) => (
            <Indicator
              key={index}
              $active={index === currentSlide}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </Indicators>
      </BannerContainer>
    </>
  );
};

export default Banner; 