import { FooterContainer, FooterContent, FooterSection } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>联系我们</h3>
          <ul>
            <li>电话：XXX-XXXX-XXXX</li>
            <li>邮箱：info@example.com</li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>服务项目</h3>
          <ul>
            <li>代孕服务</li>
            <li>辅助生殖</li>
            <li>咨询服务</li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>关于我们</h3>
          <ul>
            <li>公司简介</li>
            <li>团队介绍</li>
            <li>服务流程</li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>快速链接</h3>
          <ul>
            <li>常见问题</li>
            <li>隐私政策</li>
            <li>服务条款</li>
          </ul>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 