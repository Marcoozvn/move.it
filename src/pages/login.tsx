import { getSession, signIn } from 'next-auth/client';
import { Container, GithubBlock, GithubButton, Main } from '../styles/pages/Login';

export default function Login() {
  return (
    <Container>
      <img src="/icons/simbolo.svg" alt="Simbolo" />
      <Main>
        <img src="/icons/logo.svg" alt="Logo" />
        <h1>Bem-vindo</h1>
        <GithubBlock>
          <img src="/icons/github.svg" alt="Github" />
          <p>Faça login com seu Github para começar</p>
        </GithubBlock>
        <GithubButton onClick={() => signIn('github', { callbackUrl: 'http://localhost:3000/dashboard' })}>
          <img src="/icons/github.svg" alt="Github" />
        </GithubButton>
      </Main>
    </Container>
  )
}

export const getStaticProps = async (ctx) => {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: '/dashboard'
      }
    }
  }


  return {
    props: {

    }
  }
}
