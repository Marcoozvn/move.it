import GlobalStyle from '../styles/global';
import { Provider } from 'next-auth/client';
import { CustomThemeProvider } from '../contexts/ThemeContext';
import { Layout } from '../components/Layout';

function MyApp({ Component, pageProps }) {

  return (
    <CustomThemeProvider>
      <Provider session={pageProps.session}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </CustomThemeProvider>
  )
}

export default MyApp
