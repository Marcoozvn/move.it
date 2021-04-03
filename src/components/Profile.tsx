import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
import { useSession, signOut } from 'next-auth/client';
import { FiLogOut } from 'react-icons/fi'

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const [session, loading] = useSession();

  return (
    <>
      {!loading &&
        <div className={styles.profileContainer}>
          <div className={styles.userInfo}>
            <img src={session.user.image} alt={session.user.name} />
            <div>
              <strong>{session.user.name}</strong>
              <p>
                <img src="icons/level.svg" alt="Level" />
              Level {level}
              </p>
            </div>
          </div>
          <FiLogOut size={28} onClick={() => signOut()} />
        </div>
      }
    </>
  );
}