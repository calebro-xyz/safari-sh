import Image from "next/image";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const content = [
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    country: "Kenya",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default function ParkCard() {
  return (
    <ul role='list' className='w-full'>
      {content.map((content) => (
        <li
          key={content.email}
          className='flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow'
        >
          <div className='flex flex-col flex-1 p-8'>
            <Image
              height={48}
              width={48}
              className='flex-shrink-0 w-32 h-32 mx-auto rounded'
              src={content.imageUrl}
              alt=''
            />
            <h3 className='mt-6 text-sm font-medium text-gray-900'>
              {content.name}
            </h3>
            <dl className='flex flex-col justify-between flex-grow mt-1'>
              <dt className='sr-only'>Title</dt>
              <dd className='text-sm text-gray-500'>{content.title}</dd>
              <dt className='sr-only'>Role</dt>
              <dd className='mt-3'>
                <span className='inline-flex items-center px-2 py-1 text-xs font-medium text-green-700 rounded-full bg-green-50 ring-1 ring-inset ring-green-600/20'>
                  {content.country}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className='flex -mt-px divide-x divide-gray-200'>
              <div className='flex flex-1 w-0'>
                <a
                  href={`mailto:${content.email}`}
                  className='relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-semibold text-gray-900 border border-transparent rounded-bl-lg gap-x-3'
                >
                  <EnvelopeIcon
                    className='w-5 h-5 text-gray-400'
                    aria-hidden='true'
                  />
                  Email
                </a>
              </div>
              <div className='flex flex-1 w-0 -ml-px'>
                <a
                  href={`tel:${content.telephone}`}
                  className='relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-semibold text-gray-900 border border-transparent rounded-br-lg gap-x-3'
                >
                  <PhoneIcon
                    className='w-5 h-5 text-gray-400'
                    aria-hidden='true'
                  />
                  Call
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
