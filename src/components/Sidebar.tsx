import { Container, NavItem, Border } from '../styles/components/Sidebar';
import { FiHome, FiAward } from 'react-icons/fi';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const { route, push } = useRouter();

  return (
    <Container>
      <img src="icons/logo-icon.svg" alt="logo" />
      <NavItem onClick={() => push('dashboard')}  active={route === '/dashboard'}>
        {route === '/dashboard' && <Border />}
        <FiHome />
      </NavItem>
      <NavItem onClick={() => push('leaderboard')} active={route === '/leaderboard'}>
        {route === '/leaderboard' && <Border />}
        <FiAward />
      </NavItem>
    </Container>
  )
}