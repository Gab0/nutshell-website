import Layout from "../components/layout/Layout";

import content from "../../content/web-services.md";
import ServiceStatusDisplay from "../components/service/checker";

export default function Services() {
  return (
    <>
    <ServiceStatusDisplay />
    <Layout content={content} />
    </>
  );
}
