import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Support from "@/components/Support";
import Servicing from "@/components/Servicing";
import Mvhr from "@/components/Mvhr";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Support />
        <Servicing />
        <Mvhr />
      </main>
      <Contact />
    </>
  );
}
