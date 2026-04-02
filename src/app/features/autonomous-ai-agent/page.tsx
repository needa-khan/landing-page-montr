import Navbar from "@/components/Navbar";
import FloatingBar from "@/components/FloatingBar";
import Footer from "@/components/Footer";
import AutonomousHero from "@/components/autonomous-ai-agent/autonomousHero";
import AutonomousCapabilites from "@/components/autonomous-ai-agent/autonomousCapabilities";
import AutonomousUseCases from "@/components/autonomous-ai-agent/autonomousUseCases";
import PlatformMap from "@/components/platformMap";

export default function autonomous_ai_agent() {
  return (
    <main>
      <Navbar />
      <FloatingBar />
      <AutonomousHero />
      <PlatformMap />
      <AutonomousCapabilites />
      <AutonomousUseCases />
      <Footer />
    </main>
  );
}