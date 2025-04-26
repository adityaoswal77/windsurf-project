import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/ui/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Windsurf SPV | Modern SPV Management Platform",
  description: "A modern platform for managing Special Purpose Vehicles (SPVs)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-notion-off-white antialiased`}>
        <Navbar />
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
