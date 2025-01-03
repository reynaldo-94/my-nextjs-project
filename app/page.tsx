// import HeroSection from "./components/HeroSection";

import StepsSection from "@/src/components/StepsSection";
import HeroSection from "../src/components/HeroSection";
import EventsSection from "@/src/components/EventsSection";
import BenefitsSection from "@/src/components/BenefitsSection";

export default function Home() {
  return (
    // <div style={{ textAlign: 'center', marginTop: '50px' }}>
    //   <h1>¡Bienvenido a mi aplicación Next.js!</h1>
    //   <p>Esta es la ventana inicial de tu proyecto 🚀</p>
    // </div>
    <>
      <HeroSection />
      <StepsSection />
      <EventsSection />
      <BenefitsSection />
    </>
  );
}
