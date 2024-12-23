
import Banner from '@/components/Banner';
import Introduction from '@/components/Introduction';
import Statistics from '@/components/Statistics';
import { HomeContainer, TopBar } from './styles';

const Home = () => {
  return (
    <>
      <TopBar />
      <HomeContainer>
        <Banner />
        <Introduction />
        <Statistics />
      </HomeContainer>
    </>
  );
};

export default Home; 