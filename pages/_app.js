// /pages/_app.js
import React from 'react';
import '../styles/globals.css'; // Import global styles
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Firebase can be initialized here if necessary
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
