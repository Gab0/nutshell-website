import {Layout, fromMarkdown} from "../components/layout/Layout";

import content from "../../content/web-services.md";
import ServiceStatusDisplay from "../components/service/Checker";

export default function Services() {
  return (
    <>
      <Layout content={fromMarkdown(content)} preamble={<ServiceStatusDisplay />} />
    </>
  );
}
