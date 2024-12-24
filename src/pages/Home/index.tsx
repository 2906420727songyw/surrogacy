import Banner from '@/components/Banner';
import { Button } from './styles';
import { HomeContainer, TopBar } from './styles';

const Home = () => {
  return (
    <>
      <TopBar />
      <HomeContainer>
        <Banner
          title="成为准父母"
          subtitle="套餐价格低至45,000美元"
          bgImage="/images/banner1.jpg"
        >
          <Button>了解更多</Button>
          <Button>代孕应用</Button>
        </Banner>
      </HomeContainer>
    </>
  );
};

export default Home; 