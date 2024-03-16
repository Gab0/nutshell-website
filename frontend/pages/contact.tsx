import {Layout, fromMarkdown} from "../components/layout/Layout";

import content from "../../content/contact.md";

export default function Contact() {
  return (
    <Layout content={fromMarkdown(content)} />
  );
}
