'use client'
import { SimpleGrid, Card, Image, Text, Button, Group   } from '@mantine/core';


// import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons-react';

export default function CardOficionas(){
    return (
        <SimpleGrid cols={2} breakpoints={[
                    {maxWidth:'48rem', cols: 2, spacing:'md'},
                    {maxWidth:'36rem', cols: 1, spacing:'md'},
        ]}>
            <div>
                <h1 style={{borderBottom: "3px"}}>Oficinas Recentes</h1>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src="/img/recente.svg"
                        height={390}
                        alt="oficinas Recentes"
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Nome da oficina</Text>
                    </Group>

                    <Text size="sm" color="grey">
                        Clique e confira as novas oficinas adicionadas.
                    </Text>
                    <Button variant="filled" style={{background: "#004d2a"}} fullWidth mt="md" radius="md">
                    Ver mais
                    </Button>
                </Card>
            </div>

            <div >
            <h1 style={{borderBottom: "3px #000"}}>Oficinas Inscritas</h1>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src="/img/oficinasinscritas.svg"
                     
                        alt="oficinas inscritas"
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Nome da oficina</Text>
                    </Group>

                    <Text size="sm" color="grey">
                        Clique e confira as oficinas que você inscreveu-se.
                    </Text>
                    <Button variant="filled" style={{background: "#004d2a"}} fullWidth mt="md" radius="md">
                    Ver mais
                    </Button>
                </Card>
            </div>
                
        </SimpleGrid>
    
    )
}