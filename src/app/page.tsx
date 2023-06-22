import Image from "next/image";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
