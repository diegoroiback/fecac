import '@/styles/reset.css'
import { Inter, Playfair, Antonio } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700']
});

const playfair = Playfair({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['300', '400', '500', '600', '700']
});

const antonio = Antonio({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-antonio',
  weight: ['100', '200', '300', '400', '500', '600', '700']
});

export const metadata = {
  title: "Festival de cerveza artesanal del caribe",
  description: "El Festival de Cerveza Artesanal del Caribe es mucho más que un evento, es una celebración de la creatividad, la pasión y la tradición cervecera y gastronomica de nuestra región.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
