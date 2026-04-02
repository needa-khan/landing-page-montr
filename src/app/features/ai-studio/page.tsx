import Navbar from "@/components/Navbar";
import FloatingBar from "@/components/FloatingBar";
import Footer from "@/components/Footer";
import AIStudioHero from "@/components/ai-studio/aistudioHero";
import AIStudioCapabilities from "@/components/ai-studio/aistudioCapabilities";
import AIStudioUseCases from "@/components/ai-studio/aistudioUseCases";
import PlatformMap from "@/components/platformMap";

export default function AI_Studio() {
    return (
        <main>
            <Navbar />
            <FloatingBar />
            <AIStudioHero />
            <PlatformMap />
            <AIStudioCapabilities />
            <AIStudioUseCases />
            <Footer />
        </main>
    );
}