
import Header from "../components/header/Header";
import Navigator from "../components/navigator/Navigator";
import Content from "../components/content/Content";

import content_projects from "../../content/projects.md";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <Navigator></Navigator>
        <Content markdown={content_projects}></Content>
      </main>
    </>
  );
}
