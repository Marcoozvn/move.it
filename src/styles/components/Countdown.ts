import styled, { DefaultTheme, css } from 'styled-components';

interface Props {
  active: boolean;
  theme: DefaultTheme;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${props => props.theme.colors.title};

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: ${props => props.theme.colors.white};
    box-shadow: 0 0 60px rgba(0 , 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  }

  > div span {
    flex: 1;
  }

  > div span:first-child {
    border-right: 1px solid #f0f1f3;
  }

  > div span:last-child {
    border-left: 1px solid #f0f1f3;
  }

  > span {
    font-size: 6.25rem;
    margin: 0.5rem;
  }
`;

export const CountdownButton = styled.button<Props>`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.title === 'light' ? props.theme.colors.white : props.theme.colors.title};
  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  :disabled {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.text};
    cursor: not-allowed;
  }

  :not(:disabled):hover {
    background: ${props => props.theme.colors.blueDark};
  }

  ${props => props.active && css`
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.title};

    :not(:disabled):hover {
      background: ${props => props.theme.colors.red};
      color: ${props => props.theme.title === 'light' ? props.theme.colors.white : props.theme.colors.title};
    }
  `}
`;
