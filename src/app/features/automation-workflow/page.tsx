import Navbar from "@/components/Navbar";
import FloatingBar from "@/components/FloatingBar";
import Footer from "@/components/Footer";
import AutonomousHero from "@/components/autonomous-ai-agent/autonomousHero";
import AutonomousCapabilites from "@/components/autonomous-ai-agent/autonomousCapabilities";
import AutonomousUseCases from "@/components/autonomous-ai-agent/autonomousUseCases";
import PlatformMap from "@/components/platformMap";
{/* THIS IS A DUMMY PAGE*/}
export default function Automation_Workflow() {
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