import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CurrentExperience, Header } from '../styles/components/ExperienceBar';

export function ExperienceBar() {
  const { currentExperience, experienceToNextNevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextNevel;

  return (
    <Header>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        {currentExperience > 0 &&
          <CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
            {currentExperience}px
          </CurrentExperience>
        }
      </div>
      <span>{experienceToNextNevel} xp</span>
    </Header>
  )
}