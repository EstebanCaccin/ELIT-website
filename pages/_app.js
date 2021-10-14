import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ELIT - Mayorista de tecnología</title>
        <link rel="apple-touch-icon" href="/favicon-192x192.png" />
        <meta name="apple-mobile-web-app-title" content="ELIT" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="light-content"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="apple-touch-startup-image" href="/favicon-512x512.png" />

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon-512x512.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
