import { Varta } from 'next/font/google';

const varta = Varta({ subsets: ['latin'] });
import './globals.css';

export const metadata = {
  title: 'Alex Tanase | Web Developer',
  description: 'React software developer, UI/UX designer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={varta.className}>{children}</body>
    </html>
  );
}
