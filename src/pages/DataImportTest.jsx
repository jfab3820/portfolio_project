import SEO from "../components/ui/SEO.jsx";
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import { fragments } from "../data/FragmentsData.jsx";

export default function DataImportTest() {
  return (
    <>
      <SEO title="About Me" description="Learn about me" url="/about" />
      <Section>
        <Container>{fragments.content}</Container>
      </Section>
    </>
  );
}
