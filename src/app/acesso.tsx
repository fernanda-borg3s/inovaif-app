'use client';
import {TextInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button, Image, MantineProvider} from "@mantine/core";
import { useRouter } from "next/navigation";
export default function PageAcesso(){
    const router = useRouter();
      return (
          <Container size={420} my={10}>
           <div style={{ display: 'flex', alignItems: 'center', justifyContent:"center", width:"100%"}}>
              <Image width={200} height={140} fit="contain"  src="/img/Logo.png" alt="logo do inova If"/>
     
            
            </div>
          <Title align="center" mt={35} sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 900,
            })}
          > Seja bem-vindo!</Title>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Não tem uma conta ainda?{" "}
            <Anchor<"a"> c="blue" href="/cadastro" size="sm" 
            >Criar conta</Anchor>
          </Text>
          <form onSubmit={(e) => 
          {router.push('/painel');
          e.preventDefault();}}>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="exemplo@estudante.edu.br" required />
            <PasswordInput
              label="Senha"
              placeholder="Senha"
              required
              mt="md"
            />
            <Group position="center" spacing="xl" mt="lg">
              <Checkbox label="Lembrar-me" sx={{ lineHeight: 1 }} />
              <Anchor<"a"> c="blue" onClick={(event) => event.preventDefault()} href="/cadastro" size="sm">
                Esqueceu a senha? Toque para redefinir
              </Anchor>
            </Group>
            <Button fullWidth mt="xl" style={{background: "#004d2a"}} type="submit">
              Entrar
            </Button>
          </Paper>
          </form>
        </Container>
      )
  }