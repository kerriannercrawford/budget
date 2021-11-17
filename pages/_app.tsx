import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import createEmotionCache from '../app/styles/createEmotionCache';
import store from '../app/redux/store';

import '../app/styles/globals.css';
import theme from '../app/styles/theme';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: any) {
  const getLayout = Component.getLayout || ((page: any) => page)
  return getLayout(
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>budget</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  )
}

