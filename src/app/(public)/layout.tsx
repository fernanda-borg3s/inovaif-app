export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="pt-br">

        <body >
            <h1 style={{textAlign:"center"}}>Faça seu Login</h1>
            {children}</body>
      </html>
    )
  }
  