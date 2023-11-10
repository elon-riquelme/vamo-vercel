


import './globals.scss';
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from 'next/head';

import { config } from "@fortawesome/fontawesome-svg-core";
import { PropsWithChildren } from 'react';
import { Metadata } from 'next';
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 

export const metadata: Metadata = {
  title: 'Vamo',
  description: 'VamoVamo',
  viewport: 'initial-scale=1, viewport-fit=cover',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="styles.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <title>VamoVamo App</title>
      </Head>
      <body data-theme="dark">
        {children}
      </body>
  </html>
  );
}
