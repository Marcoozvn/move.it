import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;

  background-color: #5965E0;

`;

export const Main = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin-right: 16.25rem;

  img {
    width: 25rem;
  }

  h1 {
    font-size: 2.25rem;
    color: #fff;
    margin-top: 6rem;
    margin-bottom: 1.5rem;
  }

`;

export const GithubBlock = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2.5rem;
  }

  p {
    margin-left: 1rem;
    font-size: 1.25rem;
    color: #b2b9ff;
    line-height: 1.875rem;
    width: 254px;
  }
`;

export const GithubButton = styled.button`
  text-align: center;
  margin-top: 2.5rem;
  height: 5rem;
  background: linear-gradient(90deg, #4953b8 0%, rgba(73, 83, 184, 0.2) 100%);
  border: 0;
  border-radius: 5px;
  outline: 1px solid ${props => props.theme.colors.blue};
  color: #fff;
  transition: background-color 0.2s;

  img {
    width: 2.5rem;
  }

  &:hover {
    background: ${props => shade(0.2, props.theme.colors.green)};
  }
`;