import BePart from "@/components/BePart";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import GuestStars from "@/components/GuestStars";
import Hero from "@/components/Hero";
import MeetnGreet from "@/components/MeetnGreet";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Rundown from "@/components/Rundown";
import Sponsors from "@/components/Sponsors";
import Tenants from "@/components/Tenants";

export default function Home() {
  return (
    <div className="bg-custom-black-primary">
      <div
        style={{
          backgroundImage:
            "url('https://indonesiacomiccon.com/_nuxt/img/icc-2023-bg-pattern.38380c4.svg')",
          backgroundColor: "rgba(0, 0, 0, 1)",
        }}
        className="bg-cover bg-no-repeat h-full"
      >
        <div className="bg-gradient-to-b from-custom-black-primary/90 to-custom-black-primary h-fit">
          <Navbar />
          <Hero />
        </div>
      </div>
      <GuestStars />
      <Rundown />
      <Tenants />
      <Portfolio />
      <MeetnGreet />
      <BePart />
      <CTA />
      <Sponsors />
      <Footer />
    </div>
  );
}
