import Image from "next/image";
import Balancer from "react-wrap-balancer";

const content = [
  {
    name: "Amboseli National Park",
    title:
      "Amboseli National Park provides the best view of Mount Kilimanjaro while also providing visitors with great wildlife encounters.",
    country: "Kenya",
    cardUrl: "/amboseli",
    continent: "Africa",
    nature: "Big 5",
    hiking: "Hiking",
    imageUrl:
      "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg",
  },
];

export default function ConservanciesCard() {
  return (
    <ul role='list' className='shadow w-96'>
      {content.map((content) => (
        <li
          key={content.cardUrl}
          className='flex flex-col col-span-1 text-center divide-y divide-gray-200 rounded-lg shadow bg-background'
        >
          <div className='flex flex-col flex-1'>
            <Image
              height={300}
              width={300}
              className='flex-shrink-0 w-screen h-auto mx-auto rounded-t-md'
              src={content.imageUrl}
              alt='national park image'
            />
            <h3 className='mt-6 text-base font-semibold text-content'>
              {content.name}
            </h3>
            <dl className='flex flex-col justify-between flex-grow mt-1'>
              <dt className='sr-only'>Title</dt>
              <dd className='text-base tracking-tighter text-center text-heading'>
                <Balancer>{content.title}</Balancer>
              </dd>
              <dt className='sr-only'>Role</dt>
              <div className='flex items-center gap-2 p-4'>
                <dd className='mt-2'>
                  <span className='items-center px-4 py-2 text-sm text-green-700 rounded-full bg-green-50 ring-1 ring-inset ring-green-600/20'>
                    {content.country}
                  </span>
                </dd>
                <dd className='mt-2'>
                  <span className='items-center px-4 py-2 text-sm text-pink-700 rounded-full bg-pink-50 ring-1 ring-inset ring-pink-600/20'>
                    {content.continent}
                  </span>
                </dd>
                <dd className='mt-2'>
                  <span className='items-center px-4 py-2 text-sm rounded-full text-sky-700 bg-sky-50 ring-1 ring-inset ring-sky-600/20'>
                    {content.nature}
                  </span>
                </dd>
                <dd className='mt-2'>
                  <span className='items-center px-4 py-2 text-sm text-purple-700 rounded-full bg-purple-50 ring-1 ring-inset ring-purple-600/20'>
                    {content.hiking}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <div className='flex -mt-px divide-x divide-gray-200'>
              <div className='flex flex-1 w-0'>
                <a
                  href={content.cardUrl}
                  className='relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-semibold text-gray-900 border border-transparent rounded-bl-lg gap-x-3'
                >
                  Read more
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
