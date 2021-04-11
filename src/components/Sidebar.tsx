import { Container, NavItem, Border } from '../styles/components/Sidebar';
import { FiHome, FiAward } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Switch from 'react-dark-mode-toggle';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';

export default function Sidebar() {
  const { route, push } = useRouter();
  const [switchActive, setSwitchActive] = useState(false);
  const { toogleTheme } = useTheme();

  function handleToogle() {
    setSwitchActive(state => !state);
    toogleTheme();
  }

  return (
    <Container>
      <img src="icons/logo-icon.png" alt="logo" />
      <NavItem onClick={() => push('dashboard')}  active={route === '/dashboard'}>
        {route === '/dashboard' && <Border />}
        <FiHome />
      </NavItem>
      <NavItem onClick={() => push('leaderboard')} active={route === '/leaderboard'}>
        {route === '/leaderboard' && <Border />}
        <FiAward />
      </NavItem>  
      <Switch size={"4rem"} checked={switchActive} onChange={handleToogle} />
    </Container>
  )
}