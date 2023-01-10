import { Inter } from '@next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <header>
        <div></div>
      </header>
      <main>
        <Header></Header>
      </main>
    </>
  );
}

export function Header() {
  return (
    <>
      <div className="main">
        <section>
          <h1>Nutshell</h1>
          <p>Bioinformatics and Software Development</p>
        </section>
        <Navigator></Navigator>
      </div>
    </>
  )
}

export function Navigator() {
  return (
    <>
      <section>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/projects">Projects</Link>
      </section>
    </>
  )
}
