import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function About() {
  return (
    <>
    <SEO title="About Me" description="Learn about me" url="/about" />
    <Section>
      <Container>
        <h1 className="heading-page">About Me</h1>
        <p className="mt-2 body-default">Placeholder content</p>
      </Container>
    </Section>
    </>
  );
}
