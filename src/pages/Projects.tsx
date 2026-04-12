import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { GroupedProjectGallery, PortfolioSectionNav } from "@/components/ProjectGallery";
import heroHome from "@/assets/hero-home.jpg";
import { allProjectImages } from "@/data/projectGallery";

const Projects = () => {
  const count = allProjectImages.length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection
        image={heroHome}
        title="Projects & portfolio"
        subtitle={`Browse ${count} photos from our work—grouped by interior themes and site execution. Click any image for a full-screen view.`}
        highlight="Our work"
      />

      <section className="pb-20 md:pb-28 pt-4">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            label="Portfolio"
            title="Project gallery"
            description="Photos are grouped into living, kitchen, bedroom, bathroom, and on-site execution sets. Use the shortcuts to jump between sections."
          />
          <PortfolioSectionNav />
          <GroupedProjectGallery />
          <p className="text-center mt-16 text-sm text-muted-foreground">
            Need a reference visit or similar scope?{" "}
            <Link to="/contact" className="text-primary font-medium hover:underline">
              Talk to our team
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
