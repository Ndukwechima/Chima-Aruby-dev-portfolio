import Head from "next/head";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Technology from "./components/Technology";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      {/* <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
      </Head> */}
      <main className="flex min-h-screen flex-col bg-[#0b101f]">
        <Navbar />
        <div className="container mt-24 mx-auto py-4">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <Technology />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
