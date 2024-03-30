import type { Metadata } from 'next';
import { Header } from './components/header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Origamid Next',
  description: 'Criado por Origamid',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
