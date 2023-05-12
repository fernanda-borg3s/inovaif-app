'use client'
import { SimpleGrid, Container,  } from '@mantine/core';
import { useRouter } from "next/router";

// import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons-react';

export default function PainelPage(){
    return (
    <SimpleGrid cols={2}>
            <Container>
                <div style={{ borderBottom:"2px #004d2a"}}>
                    <h1>Oficnas Recentes</h1>
               </div>
                <div style={{ background: "#AAAAAA" }}>
                    <h3 style={{ textAlign: "center", color: "#000", }}>Nome Oficina</h3>
                    <div style={{ padding: "20px" }}>
                        <p>Docente: Pessoa1</p>
                        <p>Horário: </p>
                        <p>Local:</p>
                        <p>Vagas restantes:</p>
                    </div>
                </div>
                </Container>
                
            <Container>
            <div style={{borderBottom:"2px #004d2a",}}>
                    <h1>Oficnas inscritas</h1>
               </div>
               
               <div style={{ background: "#AAAAAA" }}>
                   <h3 style={{ textAlign: "center", color: "#000", }}>Nome Oficina</h3>
                   <div style={{ padding: "20px", borderRadius:"10px" }}>
                       <p>Docente: Pessoa1</p>
                       <p>Horário: </p>
                       <p>Local:</p>
                       <p>Vagas restantes:</p>
                   </div>
               </div>
               </Container>
    </SimpleGrid>
    
    )
}