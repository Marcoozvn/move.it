import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    color: ${props => props.theme.colors.blue};
    cursor: pointer;
  }

`;