'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { AppShell, Header, Footer, MediaQuery, Burger, useMantineTheme, MantineProvider, Image,} from '@mantine/core';
import { NavLink } from '@mantine/core';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
  return (
    <html lang="pt-br">
     <head>
      <title>InovaIF</title>
    <link rel="icon" type="image/svg+xml" href="/img/logo.png" />
    
  </head>
      <body className={inter.className} style={{background:'#f4f4f4', margin:"0px"}}>
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
        <Header height={{ base: 50, md: 70 }} p="md">
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="sm"
                      color={theme.colors.gray[6]}
                      mr="xl"
                    />
                  </MediaQuery>
      
                  <Image width={150} height={70} p="lg" src="/img/logoif.png" fit="contain" alt="logo do Instituto Federal"></Image>
                  <div style={{display:"flex", flexDirection:"row", marginLeft:"70%"}}>
                    <NavLink component="a" href="/cadastro" label="Cadastrar" p={'lg'}/>
                    <NavLink component="a" href="/sobre" label="Sobre"/>
                    <NavLink component="a" href="/ajuda" label="Ajuda"/>
                  </div>
                  
                </div>
              </Header>

      }
    >
       {children}
    </AppShell>
  </MantineProvider>
       
        </body>
    </html>
  )
}
