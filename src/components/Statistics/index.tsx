import { StatsContainer, StatsGrid, StatItem } from './styles';

const Statistics = () => {
  const stats = [
    { number: "99.4%", label: "成功率" },
    { number: "3,400+", label: "成功案例" },
    { number: "50%", label: "海外客户占比" },
    { number: "44%", label: "回头客户" },
  ];

  return (
    <StatsContainer>
      <StatsGrid>
        {stats.map((stat, index) => (
          <StatItem key={index}>
            <div className="number">{stat.number}</div>
            <div className="label">{stat.label}</div>
          </StatItem>
        ))}
      </StatsGrid>
    </StatsContainer>
  );
};

export default Statistics; 