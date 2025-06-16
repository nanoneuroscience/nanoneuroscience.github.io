import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/fonts.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nano Neurosciences | Revolutionizing Vision</title>
        <meta name="description" content="Nano Neurosciences - Advancing vision technology through cutting-edge research" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
