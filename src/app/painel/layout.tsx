import PainelHead from "./head"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
     <head>
    <PainelHead/>
    
  </head>
      
        {children}
    </html>
  )
}
