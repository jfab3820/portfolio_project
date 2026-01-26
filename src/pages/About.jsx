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
          <p className="mt-2 body-default">
            I’m Johnathan, a web developer focused on building clean, practical,
            and reliable digital tools. I work primarily with JavaScript and
            React, and I’m committed to continuous learning and improvement.
          </p>

          <p className="mt-2 body-default">
            While working full-time in logistics and warehouse operations, I’ve
            dedicated myself to developing strong technical skills through
            hands-on projects, coursework, and real-world practice. My
            background has strengthened my discipline, accountability, and
            problem-solving abilities.
          </p>

          <p className="mt-2 body-default">
            I’m especially interested in building applications that improve
            workflows, simplify complex tasks, and make everyday work more
            efficient using modern technology and AI tools.
          </p>
        </Container>
      </Section>
    </>
  );
}
