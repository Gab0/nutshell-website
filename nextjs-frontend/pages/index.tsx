import { Inter } from '@next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <Navigator></Navigator>
      </main>
    </>
  );
}

export function Header() {
  return (
    <>
      <header>
      <div className="main">
        <section className={inter.className}>
          <h1>nutshell</h1>
          <p>Bioinformatics and Software Development</p>
        </section>
      </div>
      </header>
    </>
  )
}

export function MenuLink(address: string, identifier: string) {
  return (
    <>
      <Link href={address} className="nav-button">{identifier}</Link>
    </>
  )
}

export function Navigator() {
  return (
    <>
      <section className="main">
            {MenuLink("/about", "About")}
            {MenuLink("/blog", "Blog")}
            {MenuLink("/projects", "Projects")}
            {MenuLink("/tools", "Tools")}
            {MenuLink("/services", "Services")}
      </section>
    </>
  )
}
