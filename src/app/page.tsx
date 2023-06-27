import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ParkCard from "@/components/ParkCard";
import MuesumsCard from "@/components/museumsCard";
import ConservanciesCard from "@/components/conservanciesCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* National Parks */}
      <div className='bg-background'>
        <div className='lg:mx-auto lg:max-w-full lg:px-12'>
          <div className='flex items-center justify-between px-4 py-4 sm:py-6 lg:py-8 sm:px-6 lg:px-8'>
            <h2 className='text-2xl font-bold tracking-tight text-heading'>
              National Parks
            </h2>
            {/* scroll buttons here */}
          </div>
          <div className='flex flex-row justify-center gap-4'>
            <ParkCard />
            <ParkCard />
            <ParkCard />
            <ParkCard />
          </div>
        </div>
      </div>
      {/* museums */}
      <div className='bg-background'>
        <div className='py-8 sm:py-12 lg:mx-auto lg:max-w-full lg:px-12'>
          <div className='flex items-center justify-between px-4 py-4 sm:py-6 lg:py-8 sm:px-6 lg:px-8'>
            <h2 className='text-2xl font-bold tracking-tight text-heading'>
              Museums
            </h2>
          </div>
          <div className='flex flex-row justify-center gap-4'>
            <MuesumsCard />
            <MuesumsCard />
            <MuesumsCard />
            <MuesumsCard />
          </div>
        </div>
      </div>
      {/* Conservancies */}
      <div className='bg-background'>
        <div className='py-8 sm:py-12 lg:mx-auto lg:max-w-full lg:px-12'>
          <div className='flex items-center justify-between px-4 py-4 sm:py-6 lg:py-8 sm:px-6 lg:px-8'>
            <h2 className='text-2xl font-bold tracking-tight text-heading'>
              Conservancies
            </h2>
          </div>
          <div className='flex flex-row justify-center gap-4'>
            <ConservanciesCard />
            <ConservanciesCard />
            <ConservanciesCard />
            <ConservanciesCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
