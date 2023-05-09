import Layout from "../components/layout/Layout";

import content from "../../content/web-services.md";
import ServiceStatusDisplay from "../components/service/Checker";

export default function Services() {
  return (
    <>
    <Layout content={content} preamble={<ServiceStatusDisplay />} />
    </>
  );
}
