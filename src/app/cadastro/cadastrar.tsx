'use client'
import {TextInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button, Image, MantineProvider} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from "next/navigation";


export default function FormCadastrar(){
    const router = useRouter();
    const [visible, { toggle }] = useDisclosure(false);
    return(
     
        <Container size={420} my={10}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", width: "100%" }}>
                <Image width={200} height={110} fit="contain" src="/img/logo.png" alt="logo do inova If" />


            </div>
            <Title align="center" mt={30} sx={(theme) => ({
                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                fontWeight: 900,
            })}
            > Faça seu Cadastro</Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Já tem um conta?{" "}
                <Anchor<"a"> c="blue" href="/" size="sm"
                >Faça Login</Anchor>
            </Text>
            <form onSubmit={(e) => {
                router.push('/painel');
                e.preventDefault();
            } }>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput label="Nome:" placeholder="Digite seu nome completo" required />
                    <TextInput label="Email:" placeholder="exemplo@estudante.edu.br" required />
                    <PasswordInput label="Senha:" placeholder="Senha" required mt="md"  visible={visible} onVisibilityChange={toggle} />
                    <PasswordInput mt="sm" label="Confirmar senha:" placeholder="Confirme a senha" visible={visible} onVisibilityChange={toggle} />
                    <Group position="center" spacing="xl" mt="lg">
                        <Checkbox label="Eu sou estudante" sx={{ lineHeight: 1 }} />
                        <Checkbox label="Eu sou docente" sx={{ lineHeight: 1 }} />
                    </Group>
                    <Button fullWidth mt="xl" style={{ background: "#004d2a" }} type="submit">
                        Entrar
                    </Button>
                </Paper>
            </form>
        </Container>
    );
}