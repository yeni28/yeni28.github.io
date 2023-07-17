import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import { PortfolioProvider } from '../components/context/context';
import { prefix } from '../../config/config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PortfolioProvider value={{ prefix }}>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </PortfolioProvider>
  );
}
