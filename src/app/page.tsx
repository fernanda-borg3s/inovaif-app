'use client';

// import styles from './page.module.css'
import { useState } from 'react';
import { useRouter } from "next/router";
import { AppShell, Navbar, Header, Footer, Aside, Text, MediaQuery, Burger, useMantineTheme, MantineProvider, Image,} from '@mantine/core';
import PageAcesso from './acesso';
import { NavLink } from '@mantine/core';

export default function Home() {
  return (
    <MantineProvider 
    withGlobalStyles
    withNormalizeCSS>
      <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      footer={
        <Footer height={50} style={{display: 'flex', alignItems: 'center',justifyContent:"center",background:'#004d2a', color:"#FFFFFF",}}>
         INSTITUTO FEDERAL DE BRASÍLIA | 2023
        </Footer>
      }
      header={
        <Header height={{ base: 40, md: 70 }} >
          <div style={{ display: 'flex', alignItems: 'left', height: '100%', width:"20%" }}>
          <Image width={200} height={70} src="./img/logoif.png" alt="logo do instituto federal"/>
     
          <NavLink component="a" href="/users" label="Sobre"/>
          <NavLink component="a" href="/ajuda" label="Ajuda"/>
          <NavLink component="a" href="/ajuda" label="Ajuda"/>
          </div>
        </Header>
      }
    >
      <PageAcesso/>
    </AppShell>
  </MantineProvider>
  )
}
