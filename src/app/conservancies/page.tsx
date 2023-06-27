import ConservanciesCard from "@/components/conservanciesCard";

export default function ConservanciesPage() {
  return (
    <div className='py-24 bg-white sm:py-32'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Conservancies
          </h2>
          <p className='mt-2 text-lg leading-8 text-gray-600'>
            Discover the most beautiful Conservancies around the world.
          </p>
        </div>
        <div className='grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          <ConservanciesCard />
          <ConservanciesCard />
          <ConservanciesCard />
          <ConservanciesCard />
          <ConservanciesCard />
          <ConservanciesCard />
        </div>
      </div>
    </div>
  );
}
