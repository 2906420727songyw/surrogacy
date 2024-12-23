import { ProcessContainer, ProcessContent, Title, ProcessItem } from './styles';

const Process = () => {
  return (
    <ProcessContainer>
      <ProcessContent>
        <Title>自由签约加盟流程</Title>
        <ProcessItem>
          <h3>第一步</h3>
          <p>在线咨询了解详情</p>
        </ProcessItem>
        <ProcessItem>
          <h3>第二步</h3>
          <p>提交基本资料</p>
        </ProcessItem>
        <ProcessItem>
          <h3>第三步</h3>
          <p>专业团队评估</p>
        </ProcessItem>
        <ProcessItem>
          <h3>第四步</h3>
          <p>签订合作协议</p>
        </ProcessItem>
      </ProcessContent>
    </ProcessContainer>
  );
};

export default Process; 