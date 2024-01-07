import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
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
      <div className=" bg-black">
        <Footer />
      </div>
    </>
  );
}
