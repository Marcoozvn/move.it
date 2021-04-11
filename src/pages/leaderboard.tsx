import Head from 'next/head';
import UserProfile from '../components/UserProfile';
import axios from 'axios';

import { Container, Header, TableHead, TableRow, PositionColumn, UserColumn, ChallengesColumn, ExperienceColumn, PositionHead, UserHead, ChallengesHead, ExperienceHead } from '../styles/pages/Leaderboard';
import { getSession } from 'next-auth/client';
import IUser from '../models/IUser';

export default function Leaderboard({ users }) {

  return (
    <Container>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>

        <Header>
          Leaderboard
        </Header>

        <TableHead>
          <PositionHead>Posição</PositionHead>
          <UserHead>
            <span>Usuário</span>
          </UserHead>
          <ChallengesHead>Desafios</ChallengesHead>
          <ExperienceHead>Experiência</ExperienceHead>
        </TableHead>


        { users.map((user: IUser) => (
          <TableRow key={user.email}>
            <PositionColumn>1</PositionColumn>
            <UserColumn>
              <UserProfile user={user} level={user.level} mini={true}/>
            </UserColumn>
            <ChallengesColumn>
              <strong>{user.challengesCompleted} </strong>
              completados
            </ChallengesColumn>
            <ExperienceColumn>
              <strong>{user.currentExperience} </strong>
              xp
            </ExperienceColumn>
          </TableRow>
          ))
        }
    </Container>
  )
}

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: '/login'
      }
    }
  }

  const response = await axios.get<IUser[]>('http://localhost:3000/api/user');

  console.log(response.data);

  return {
    props: {
      users: response.data
    }
  }
}