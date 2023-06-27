import Image from "next/image";

export default function Hero() {
  return (
    <div className='py-24 overflow-hidden bg-background'>
      <div className='px-6 mx-auto max-w-7xl lg:flex lg:px-8'>
        <div className='grid max-w-2xl grid-cols-1 mx-auto gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
          <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
            <h2 className='text-3xl font-bold tracking-tight text-heading sm:text-4xl'>
              Our people
            </h2>
            <p className='mt-6 text-xl leading-8 text-content'>
              Quasi est quaerat. Sit molestiae et. Provident ad dolorem
              occaecati eos iste. Soluta rerum quidem minus ut molestiae velit
              error quod. Excepturi quidem expedita molestias quas.
            </p>
            <p className='mt-6 text-base leading-7 text-content'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat. Quasi aperiam sit non sit neque reprehenderit.
            </p>
            <div className='flex mt-10'>
              <a
                href='#'
                className='rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-tertiary shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                start traveling<span aria-hidden='true'>&rarr;</span>
              </a>
            </div>
          </div>
          <div className='flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents'>
            <div className='flex-auto w-0 lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
              <Image
                height={500}
                width={500}
                src='https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
                className='aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover'
              />
            </div>
            <div className='contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8'>
              <div className='flex self-end justify-end flex-none order-first w-64 lg:w-auto'>
                <Image
                  height={500}
                  width={500}
                  src='https://images.pexels.com/photos/259554/pexels-photo-259554.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt=''
                  className='aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                />
              </div>
              <div className='flex justify-end flex-auto w-96 lg:w-auto lg:flex-none'>
                <Image
                  height={500}
                  width={500}
                  src='https://images.pexels.com/photos/3772630/pexels-photo-3772630.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt=''
                  className='aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                />
              </div>
              <div className='hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none'>
                <Image
                  height={500}
                  width={500}
                  src='https://images.pexels.com/photos/33154/leopard-leopard-head-wildlife-big-cat.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt=''
                  className='aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
