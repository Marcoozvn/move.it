import { Container, NavItem, Border } from '../styles/components/Sidebar';
import { FiHome, FiAward } from 'react-icons/fi';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const { route } = useRouter();

  return (
    <Container>
      <img src="icons/logo-icon.svg" alt="logo" />
      <NavItem active={route === '/dashboard'}>
        {route === '/dashboard' && <Border />}
        <FiHome />
      </NavItem>
      <NavItem active={route === '/leaderboard'}>
        {route === '/leaderboard' && <Border />}
        <FiAward />
      </NavItem>
    </Container>
  )
}