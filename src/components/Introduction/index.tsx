import { IntroContainer, IntroContent, Title, Description, CompanyInfo } from './styles';

const Introduction = () => {
  return (
    <IntroContainer>
      <IntroContent>
        <Title>Sapling Surrogacy</Title>
        <Description>
          我们为您提供专业的代孕服务，包括：<br />
          医疗咨询、法律援助、心理辅导等全方位服务。<br />
          让每一个期待为人父母的梦想都能实现。
        </Description>
      </IntroContent>
      <CompanyInfo>
        <p>我们为您提供专业的代孕服务，包括：</p>
        <p>医疗咨询、法律援助、心理辅导等全方位服务。</p>
        <p>让每一个期待为人父母的梦想都能实现。</p>
      </CompanyInfo>
    </IntroContainer>
  );
};

export default Introduction; 