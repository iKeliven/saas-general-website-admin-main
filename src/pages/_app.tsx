import type { AppProps } from 'next/app';
import '../styles/global.css';
import { MenuContextProvider } from '../context/menuContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuContextProvider>
      <Component {...pageProps} />
    </MenuContextProvider>
  );
}

export default MyApp;
