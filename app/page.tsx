import AboutSection from "@/components/Jurusan";
import Berita from "@/components/Berita";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ViewAgenda from "@/components/Agenda";
import Video from "@/components/Video";
import ViewDataGuru from "@/components/DataGuru";
import { Poppins } from "@next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: "200" });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSection />
      <ViewDataGuru />
      <ViewAgenda />
      <Berita />
    </>
  );
}
