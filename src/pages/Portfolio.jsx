import Projects from "../components/sections/Projects.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Portfolio() {
  return (
    <>
    <SEO title="My Portfolio" description="Browse my projects" url="/portfolio" />
    <Projects
      title="Portfolio"
      description="Click any card to view details"
      headingLevel="h1"
      headingId="portfolio-heading"
      showViewMore={false}
    />
    </>
  );
}
