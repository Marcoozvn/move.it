import { Container } from '../styles/components/UserProfile';

export default function UserProfile({ user, level, mini }) {
  return (
    <Container mini={mini}>
      <img src={user.image} alt={user.name} />
      <div>
        <strong>{user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
        Level {level}
        </p>
      </div>
    </Container>
  )
}