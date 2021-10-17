import "tailwindcss/tailwind.css";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import "tailwindcss/screens.css";
import "../styles/app.css";

import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import { checkTheme, DarkModeButton } from "../utils/theme";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    checkTheme();
  });

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>

      <DefaultSeo
          defaultTitle="Dashboard"
          titleTemplate="%s | Dashboard"
          openGraph={{
              title: `Personal Dashboard`,
              type: `website`,
              site_name: `Personal Dashboard`,
          }}
          description="Personal dashboard for my own devices and applications."
      />

      <div className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100 min-h-screen" id="App">
        <Component {...pageProps} />

        <DarkModeButton />
      </div>
    </>
  )
}

export default MyApp;
