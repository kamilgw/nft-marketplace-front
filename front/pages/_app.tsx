import React from 'react';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from 'utils/client';
// import { EnsureUsernameSetModal } from 'hooks/ensureUsername';
// import { ClientOnly } from 'components/atoms/clientOnly';
import { CookiesProvider } from 'react-cookie';


const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
      <CookiesProvider>
      <ApolloProvider client={client}>
        {/*<ClientOnly>*/}
        {/*  <EnsureUsernameSetModal />*/}
        {/*</ClientOnly>*/}
        <Component {...pageProps} />
      </ApolloProvider>
      </CookiesProvider>
  );
};

// TODO: Remove after fixing problems with builds
// @ts-ignore
App.getInitialProps = () => ({});

export default App;
