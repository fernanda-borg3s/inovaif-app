'use client';

import { useState } from 'react';
import { AppShell, Header, Footer, Text, Image, Avatar, Menu, NavLink, UnstyledButton, Group, Navbar, Burger, MediaQuery, useMantineTheme, } from '@mantine/core';
import { forwardRef } from 'react';
import { IconChevronRight, IconSettings, IconPhoto, IconUserCircle, IconDoorExit, IconBell, IconLayersSubtract, IconChecklist, IconNews, IconNote} from '@tabler/icons-react';



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
          width: '100%',
          padding: theme.spacing.md,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  
        })}
        {...others}
      >
        <Group>
          <Avatar src={image} radius="xl" />
  
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500} >
              {name}
            </Text>
          </div>
          {icon || <IconChevronRight size="1.5rem"/>}
  
         
        </Group>
      </UnstyledButton>
    )
  );
export default function MenuLayout({children,
}: {
  children: React.ReactNode
}) {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    return(
        <AppShell
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar  hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 250 }}>
                <Navbar.Section grow mt="md" >{ 
                    <>
                    <NavLink component="a" href="/" label="Oficinas Recentes" icon={<IconLayersSubtract size={25} color="#004d2a"/>}/>
                    <NavLink component="a" href="" label="Oficinas Inscritas" icon={<IconChecklist size={25} color="#004d2a"/>}/>
                    <NavLink component="a" href="" label="Oficinas Disponíveis" icon={<IconLayersSubtract size={25} color="#004d2a"/>}/>
                    <NavLink component="a" href="" label="Notícias" icon={<IconNews size={25} color="#004d2a"/>} />
                    <NavLink component="a" href="" label="Sugestão" icon={<IconNote size={25} color="#004d2a"/>}/></>}</Navbar.Section>
                <Navbar.Section>{ 
                    <Group position="left">
                        <Menu withArrow>
                            <Menu.Target>
                                <UserButton 
                                    name="Harriette Spoonlicker"
                                    image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                                    />
                            </Menu.Target>
                            <Menu.Dropdown>
                            <Menu.Label>Perfil</Menu.Label>
                            <Menu.Item icon={<IconSettings size={14} />}>Configuração</Menu.Item>
                            <Menu.Item icon={<IconUserCircle size={14} />}>Perfil</Menu.Item>
                            <Menu.Item icon={<IconBell size={14} />}>Notificações</Menu.Item>
                            <Menu.Item icon={<IconPhoto size={14} />}>Oficinas</Menu.Item>
                            <Menu.Item color="red" icon={<IconDoorExit size={14} />}>Sair</Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>}</Navbar.Section>
                </Navbar>
                
            }
            header={
              <Header height={{ base: 50, md: 70 }} p="md" style={{background:"#004d2a"}}>
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="sm"
                      color={theme.colors.gray[0]}
                      mr="xl"
                    />
                  </MediaQuery>
      
                  <Image width={150} height={70} src="/img/inovabarra.png" fit="contain" alt='logo do inova if'></Image>
                </div>
              </Header>
            }
            footer={
                <Footer height={50} style={{display: 'flex', alignItems: 'center',justifyContent:"center",background:'#004d2a', color:"#FFFFFF",}}>
                 INSTITUTO FEDERAL DE BRASÍLIA | 2023
                </Footer>}
                >
                  {children}
            </AppShell>
    )
}