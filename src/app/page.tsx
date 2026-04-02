import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Overview from "@/components/Overview";
import Impacts from "@/components/Impacts";
import FloatingBar from "@/components/FloatingBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FloatingBar />
      <div className="pt-20"> {/* offset for fixed navbar */}
        <Hero />
        <Integrations />
        <Overview />
        <Impacts />
        <Footer />
      </div>
    </main>
  );
}