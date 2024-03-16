import {Layout, fromMarkdown} from "../components/layout/Layout";

import content from "../../content/about.md";

export default function Contact() {
  return (
    <Layout content={fromMarkdown(content)} />
  );
}
