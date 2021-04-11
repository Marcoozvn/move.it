import styled from 'styled-components';

interface NavItemProps {
  active: boolean;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 7rem;
  height: 100vh;
  background: #fff;
  box-shadow: 0px 0px 60px 0px #000000 5%;

  > img {
    position: absolute;
    top: 2rem;
    width: 3rem;
    height: 2.625rem;
  }

  > button {
    position: absolute;
    bottom: 2rem;
    width: 2rem;
    height: 2rem;
  }
`

export const NavItem = styled.div<NavItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem;
  position: relative;


  svg {
    cursor: pointer;
    opacity: ${props => props.active ? 1.0 : 0.5};
    color: ${props => props.active ? '#5965E0' : '#666666'};
    font-size: 2rem;
  }
`

export const Border = styled.div`
  position: absolute;
  width: 0.24rem;
  height: 3.5rem;
  left: 0px;

  background: #5965E0;
  border-radius: 0px 5px 5px 0px; 
`