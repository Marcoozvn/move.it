import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  color: #2E384D;
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 2.875rem;

  margin-bottom: 2.5rem;
`;

export const TableHead = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.05875rem;
  opacity: 0.5;

  margin-bottom: 1.5rem;
`;

export const PositionHead = styled.span`
  flex: 0.35;
`;

export const UserHead = styled.span`
  span {
    padding-left: 1.5rem;
  }
  flex: 2.5;
`;

export const ChallengesHead = styled.span`
  flex: 1;
`;

export const ExperienceHead = styled.span`
  flex: 1;
`;

export const TableRow = styled.div`
  background: #fff;
  display: flex;

  height: 6rem;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const PositionColumn = styled.div`
  flex: 0.35;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  border-right: 4px solid #f0f1f3;

  font-size: 1.5rem;
  line-height: 1.81rem;
`;

export const UserColumn = styled.div`
  flex: 2.5;

  > div {
    padding-left: 1.5rem;
  }
`;

export const ChallengesColumn = styled.div`
  flex: 1;

  strong {
    color: #5965E0;
  }
`;

export const ExperienceColumn = styled.div`
  flex: 1;

  strong {
    color: #5965E0;
  }
`;

