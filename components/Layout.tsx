import React, { ReactNode } from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from './Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div style={{ overflowX: 'hidden' }}>
    <style jsx global>{`
      html {
        box-sizing: border-box;
        background-color: #f7fafd;
      }
      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }
      body {
        margin: 0;
        overflow-x: hidden;
      }
    `}</style>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <NavBar />
    </header>
    {children}
    <Footer />
  </div>
);

export default Layout;
