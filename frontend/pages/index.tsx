import {Layout, fromMarkdown} from "../components/layout/Layout";

import content from "../../content/services.md";

export default function Home() {
  return (
    <Layout content={fromMarkdown(content)} />
  );
}

