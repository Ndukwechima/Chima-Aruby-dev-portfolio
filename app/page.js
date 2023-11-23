import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Technology from "./components/Technology";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col bg-[#0b101f]">
        <Navbar />
        <div className="container mt-24 mx-auto py-4">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <Technology />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}
