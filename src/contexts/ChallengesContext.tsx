import { createContext, useEffect, useState } from 'react';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import LevelUpModal from '../components/LevelUpModal';
import { useSession } from 'next-auth/client';
import axios from 'axios';
import IUser from '../models/IUser';

interface IChallenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface IChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: IChallenge;
  experienceToNextNevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface IChallengesProviderProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


export const ChallengesContext = createContext({} as IChallengesContextData);

export const ChallengesProvider: React.FC<IChallengesProviderProps> = (props) => {
  const [session, loading] = useSession();
  const [level, setLevel] = useState(props.level ?? 0);
  const [currentExperience, setCurrentExperience] = useState(props.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(props.challengesCompleted ?? 0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [ísLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextNevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    if (session) {
      axios.get<IUser>(`/api/me?email=${session.user.email}`).then(response => {
        setLevel(response.data.level);
        setCurrentExperience(response.data.currentExperience);
        setChallengesCompleted(response.data.challengesCompleted);
      })

    }
  }, [session]);

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted])

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        body: `Valendo ${challenge.amount}xp!`
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience > experienceToNextNevel) {
      finalExperience = finalExperience = experienceToNextNevel;
      levelUp()
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  useEffect(() => {
    if (!loading) {
      axios.post(`/api/user`, { email: session.user.email, level, currentExperience, challengesCompleted }).then(result => console.log(result));
    }
  }, [level, currentExperience, challengesCompleted]);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextNevel,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal
      }}>
      {props.children}
      { ísLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  )
}