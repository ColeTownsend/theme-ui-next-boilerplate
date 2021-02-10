import App from 'next/app';
import { ThemeProvider, Container } from 'theme-ui';
import NProgress from 'next-nprogress-emotion';
import { DefaultSeo } from 'next-seo';

import Header from '../components/Header';
import theme from '../theme';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <NProgress />
        <Container>
          <DefaultSeo
            openGraph={{
              type: 'website',
              locale: 'en_US',
              url: 'https://shoekicker.com',
              site_name: 'Find the internet’s best prices on running shoes',
            }}
            canonical="https://shoekicker.com"
            twitter={{
              handle: '@shoe_kicker',
              site: '@shoe_kicker',
              cardType: 'summary_large_image',
            }}
          />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default MyApp;
