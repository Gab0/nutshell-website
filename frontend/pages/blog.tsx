import {Layout, fromMarkdown} from "../components/layout/Layout";

import content from "../../content/blog.md";

export default function Project() {
  return (
    <Layout content={fromMarkdown(content)} />
  );
}
