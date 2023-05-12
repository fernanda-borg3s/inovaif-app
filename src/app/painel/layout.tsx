'use client';

// import styles from './page.module.css'
import { useState } from 'react';
import { useRouter } from "next/router";
import { AppShell, Header, Footer, Text, MantineProvider, Image, Avatar, Menu, NavLink, UnstyledButton, Group, Navbar } from '@mantine/core';
import { forwardRef } from 'react';
import { IconChevronRight, IconSettings, IconPhoto, IconMessageCircle, IconChevronLeft, } from '@tabler/icons-react';
import PainelPage from './page';
import PainelHead from './head';


interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    image: string;
    name: string;
    icon?: React.ReactNode;
  }
  
  const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
    ({ image, name, icon, ...others }: UserButtonProps, ref) => (
      <UnstyledButton
        ref={ref}
        sx={(theme) => ({
          display: 'block',
          width: '25%',
          padding: theme.spacing.md,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  
        })}
        {...others}
      >
        <Group>
            {icon || <IconChevronLeft size="1rem" color='#fff'/>}
          <Avatar src={image} radius="xl" />
  
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500} color='#fff'>
              {name}
            </Text>
          </div>
  
         
        </Group>
      </UnstyledButton>
    )
  );

export default function PainelLayout() {
    const [opened, setOpened] = useState(false);
  return (
   
    <MantineProvider 
    withGlobalStyles
    withNormalizeCSS

    >
      <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
    
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          {/* <div style={{ display:"flex", alignItems:"right" ,height: '100%', width:"100%", }}> */}
            <NavLink component="a" href="/perfil" label="Perfil" />
            <NavLink component="a" href="/configuracao" label="Configuração"/>
            <NavLink component="a" href="/ajuda" label="Sugestão"/>
            
            {/* </div> */}
        </Navbar>
      }
      footer={
        <Footer height={50} style={{display: 'flex', alignItems: 'center',justifyContent:"center",background:'#004d2a', color:"#FFFFFF",}}>
         INSTITUTO FEDERAL DE BRASÍLIA | 2023
        </Footer>
      }
      header={
        <Header height={{ base: 40, md: 70}} style={{background:'#004d2a'}}>
         <Image width={200} height={70} src="/img/logo.png" alt="logo inova if" style={{float:"left"}}/>

          <Group position="right">
            <Menu withArrow>
                <Menu.Target>
                    <UserButton
                        image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                        name="Harriette Spoonlicker"/>
                </Menu.Target>
                <Menu.Dropdown>
                <Menu.Label>Perfil</Menu.Label>
                <Menu.Item icon={<IconSettings size={14} />}>Configuração</Menu.Item>
                <Menu.Item icon={<IconMessageCircle size={14} />}>Notificações</Menu.Item>
                <Menu.Item icon={<IconPhoto size={14} />}>Oficinas</Menu.Item>
                </Menu.Dropdown>
            </Menu>
         </Group>
        </Header>
      }
    >
      <PainelPage/>
    </AppShell>
  </MantineProvider>
  )
}
