import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { Container } from '../styles/components/Profile';
import { useSession, signOut } from 'next-auth/client';
import { FiLogOut } from 'react-icons/fi'
import UserProfile from './UserProfile';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const [session, loading] = useSession();

  return (
    <>
      {!loading &&
        <Container>
          <UserProfile user={session.user} level={level} mini={false}/>
          <FiLogOut size={28} onClick={() => signOut()} />
        </Container>
      }
    </>
  );
}