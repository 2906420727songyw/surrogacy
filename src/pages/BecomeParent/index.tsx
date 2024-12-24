import React from 'react';
import Banner from '@/components/Banner';
import { Section, Title, Subtitle, Button } from './styles';

const BecomeParent = () => {
  return (
    <>
      <Banner
        title="成为准父母"
        subtitle="套餐价格低至45,000美元"
        bgImage="/images/banner1.jpg"
      >
        <Button>了解更多</Button>
        <Button>代孕应用</Button>
      </Banner>
      <Section>
        <Title>成为准父母</Title>
        <Subtitle>欢迎单身父母和LGBTQ群体</Subtitle>
      </Section>
    </>
  );
};

export default BecomeParent; 