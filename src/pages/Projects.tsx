import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { GroupedProjectGallery, PortfolioSectionNav } from "@/components/ProjectGallery";
import heroHome from "@/assets/hero-home.jpg";
import { allProjectImagesFlat, allProjects } from "@/data/projectGallery";

const Projects = () => {
  const photoCount = allProjectImagesFlat.length;
  const projectCount = allProjects.length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection
        image={heroHome}
        title="Projects & portfolio"
        subtitle={`Browse ${photoCount} premium photos across our ${projectCount} major case studies—grouped by project location and interior categories. Click any image for a full-screen view.`}
        highlight="Our work"
      />

      <section className="pb-20 md:pb-28 pt-4">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            label="Portfolio"
            title="Project Case Studies"
            description="Explore our high-end residential and commercial executions across Hyderabad — Banjara Hills, Sun City, Madhapur, Masab Tank, Ameerpet, Rayadurg, and PK. Photos are grouped by project site and categorized into works like Carpentry, Kitchens, Electrical, and Lighting details."
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
