import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
import { useSession, signOut } from 'next-auth/client';
import { FiLogOut } from 'react-icons/fi'
import UserProfile from './UserProfile';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const [session, loading] = useSession();

  console.log(session);

  return (
    <>
      {!loading &&
        <div className={styles.profileContainer}>
          <UserProfile user={session.user} level={level} mini={false}/>
          <FiLogOut size={28} onClick={() => signOut()} />
        </div>
      }
    </>
  );
}