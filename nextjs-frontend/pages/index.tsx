import { Inter } from '@next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Content from "../components/content/Content";
import Header from "../components/header/Header";
import Navigator from "../components/navigator/Navigator";

import content_home from "../../content/home.md";
import content_services from "../../content/services.md";
import content_projects from "../../content/projects.md";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <Navigator></Navigator>
        <Content markdown={content_home}></Content>
      </main>
    </>
  );
}

