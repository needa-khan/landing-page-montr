import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Features from "@/components/Features";
import Impacts from "@/components/Impacts";
import FloatingBar from "@/components/FloatingBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FloatingBar />
      <div className="pt-20"> {/* offset for fixed navbar */}
        <Hero />
        <Integrations />
        <Features />
        <Impacts />
      </div>
    </main>
  );
}