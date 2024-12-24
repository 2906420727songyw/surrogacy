import Banner from '@/components/Banner';
import { Section, Title, Subtitle, Button } from './styles';
import { HomeContainer, TopBar } from './styles';

const Home = () => {
  return (
    <>
      <TopBar />
      <HomeContainer>
        <Section>
          <Title>成为准父母</Title>
          <Subtitle>套餐价格低至45,000美元</Subtitle>
          <Button>了解更多</Button>
          <Button>代孕应用</Button>
        </Section>
      </HomeContainer>
    </>
  );
};

export default Home; 