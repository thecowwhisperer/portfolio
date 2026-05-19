import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MoreProjects } from "@/components/MoreProjects";
import { Nav } from "@/components/Nav";
import { Stack } from "@/components/Stack";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <div className="section-divider" />
        <FeaturedProjects />
        <div className="section-divider" />
        <MoreProjects />
        <div className="section-divider" />
        <Stack />
        <div className="section-divider" />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
