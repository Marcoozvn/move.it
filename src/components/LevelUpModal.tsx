import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { Container, Overlay } from '../styles/components/LevelUpModal';

const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </Container>
    </Overlay>
  );
}

export default LevelUpModal;