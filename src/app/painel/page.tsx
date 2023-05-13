'use client'
import {MantineProvider } from '@mantine/core';
import CardOficionas from './cardoficina';
import PainelHead from './head';
import MenuLayout from '../componentes/menuLayout';

// import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons-react';

export default function PainelPage(){
    return (
     
      <body style={{background:"#f4f4f4"}}>
         <MantineProvider  withGlobalStyles
      withNormalizeCSS>
            <MenuLayout>
              <CardOficionas/>
            </MenuLayout>
         </MantineProvider>
      </body>
    
    )
}