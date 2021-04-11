import styled from 'styled-components';

interface ContainerProps {
  mini: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  div {
    margin-left: ${props => props.mini ? '1rem' : '1.5rem'};

    p {
      font-size: 1rem;
      margin-top: 0.5rem;

      img {
        margin-right: 0.5rem;
      }
    }

    strong {
      font-size: ${props => props.mini ? '1.25rem' : '1.5rem'};
      font-weight: 600;
      color: ${props => props.theme.colors.title};
    }
  }

  > img {
    width: ${props => props.mini ? '4rem' : '5.5rem'};
    height:  ${props => props.mini ? '4rem' : '5.5rem'};
    border-radius: 50%;
  }
`;