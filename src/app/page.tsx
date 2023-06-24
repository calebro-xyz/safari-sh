import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Image from "next/image";
import Navbar from "@/components/navbar";
import ParkCard from "@/components/ParkCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* National Parks */}
      <div className='bg-background'>
        <div className='py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8'>
          <div className='flex items-center justify-between px-4 sm:px-6 lg:px-0'>
            <h2 className='text-2xl font-bold tracking-tight text-heading'>
              National Parks
            </h2>
            <a
              href='#'
              className='hidden text-sm font-semibold text-primary hover:text-indigo-500 sm:block'
            >
              See everything
              <span aria-hidden='true'> &rarr;</span>
            </a>
          </div>
          <div className='flex flex-row gap-4'>
            <ParkCard />
            <ParkCard />
            <ParkCard />
            <ParkCard />
          </div>
          <div className='flex px-4 mt-12 sm:hidden'>
            <a
              href='#'
              className='text-sm font-semibold text-heading hover:text-primary'
            >
              See everything
              <span aria-hidden='true'> &rarr;</span>
            </a>
            ParkCard
          </div>
        </div>
      </div>
      {/* museums */}
      <div className='bg-background'>
        <div className='py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8'>
          <div className='flex items-center justify-between px-4 sm:px-6 lg:px-0'>
            <h2 className='text-2xl font-bold tracking-tight text-heading'>
              Museums
            </h2>
            <a
              href='#'
              className='hidden text-sm font-semibold text-primary hover:text-indigo-500 sm:block'
            >
              See everything
              <span aria-hidden='true'> &rarr;</span>
            </a>
          </div>
          <div className='flex flex-row gap-4'>
            <ParkCard />
            <ParkCard />
            <ParkCard />
            <ParkCard />
          </div>
          <div className='flex px-4 mt-12 sm:hidden'>
            <a
              href='#'
              className='text-sm font-semibold text-heading hover:text-primary'
            >
              See everything
              <span aria-hidden='true'> &rarr;</span>
            </a>
            ParkCard
          </div>
        </div>
      </div>
      {/* Conservancies */}
      <div className='bg-background'>
        <div className='py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8'>
          <div className='flex items-center justify-between px-4 sm:px-6 lg:px-0'>
            <h2 className='text-2xl font-bold tracking-tight text-heading'>
              Conservancies
            </h2>
            <a
              href='#'
              className='hidden text-sm font-semibold text-primary hover:text-indigo-500 sm:block'
            >
              See everything
              <span aria-hidden='true'> &rarr;</span>
            </a>
          </div>
          <div className='flex flex-row gap-4'>
            <ParkCard />
            <ParkCard />
            <ParkCard />
            <ParkCard />
          </div>
          <div className='flex px-4 mt-12 sm:hidden'>
            <a
              href='#'
              className='text-sm font-semibold text-heading hover:text-primary'
            >
              See everything
              <span aria-hidden='true'> &rarr;</span>
            </a>
            ParkCard
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
