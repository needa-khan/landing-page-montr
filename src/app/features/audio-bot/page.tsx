import Navbar from "@/components/Navbar";
import FloatingBar from "@/components/FloatingBar";
import Footer from "@/components/Footer";
import AudioBotHero from "@/components/audio-bot/audiobotHero";
import AudioBotCapabilities from "@/components/audio-bot/audiobotCapabilities";
import AudioBotUseCases from "@/components/audio-bot/audiobotUseCases";
import PlatformMap from "@/components/platformMap";

export default function Audio_Bot() {
  return (
    <main>
      <Navbar />
      <FloatingBar />
      <AudioBotHero />
      <PlatformMap />
      <AudioBotCapabilities />
      <AudioBotUseCases />
      <Footer />
    </main>
  );
}