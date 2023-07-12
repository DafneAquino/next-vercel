import Head from "next/head";
// import { /* FC, */ PropsWithChildren } from "react";
import React from "react";
import { useRouter } from "next/router";

import { Navbar } from "../ui";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin 

export const Layout = ({ children, title }: Props) => {


  return (
    <>
      <Head>
        <title>{title || "PokemonApp"} </title>
        <meta name="author" content="Coral Aquino" />
        <meta name="description" content={`Info sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        
        <meta property="og:title" content={`Información sobre ${ title }`} />
        <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
        
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
