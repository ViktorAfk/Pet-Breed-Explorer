import type { Metadata } from 'next';
import { Bebas_Neue, Roboto } from 'next/font/google';
import './globals.css';
import { Container } from '@/components/Container';

const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Pet Breed Explorer',
  description: 'Discover interesting information about pets',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={'en'}>
      <body
        className={`${bebas_neue.className} ${roboto.className} antialiased`}
      >
        <Container>{children}</Container>
      </body>
    </html>
  );
}
