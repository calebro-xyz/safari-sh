"use client";

import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

// const languages = ["ENG", "ESP"];
const navigation = {
  pages: [
    { name: "Countries", href: "#" },
    { name: "National Parks", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Conservancies", href: "#" },
  ],
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className='bg-background'>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-40 lg:hidden' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto shadow-xl bg-background'>
                <div className='flex px-4 pt-5 pb-2'>
                  <button
                    type='button'
                    className='inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon
                      className='w-6 h-6 text-primary'
                      aria-hidden='true'
                    />
                  </button>
                </div>

                <div className='px-4 py-6 space-y-6 border-t border-gray-200'>
                  {navigation.pages.map((page) => (
                    <div key={page.name} className='flow-root'>
                      <a
                        href={page.href}
                        className='block p-2 -m-2 font-medium text-content'
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
                {/* Login Code - comment
                <div className='px-4 py-6 space-y-6 border-t border-gray-200'>
                  <div className='flow-root'>
                    <a
                      href='#'
                      className='block p-2 -m-2 font-medium text-gray-900'
                    >
                      Create an account
                    </a>
                  </div>
                  <div className='flow-root'>
                    <a
                      href='#'
                      className='block p-2 -m-2 font-medium text-gray-900'
                    >
                      Sign in
                    </a>
                  </div>
                </div> */}

                {/* Language selector - comment 
                <div className='px-4 py-6 space-y-6 border-t border-gray-200'>
                  
                  <form>
                    <div className='inline-block'>
                      <label htmlFor='mobile-language' className='sr-only'>
                        Currency
                      </label>
                      <div className='relative -ml-2 border-transparent rounded-md group focus-within:ring-2 focus-within:ring-white'>
                        <select
                          id='mobile-language'
                          name='language'
                          className='flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-content focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800'
                        >
                          {languages.map((language: any) => (
                            <option key={language}>{language}</option>
                          ))}
                        </select>
                        <div className='absolute inset-y-0 right-0 flex items-center pointer-events-none'>
                          <ChevronDownIcon
                            className='w-5 h-5 text-gray-500'
                            aria-hidden='true'
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className='relative'>
        <nav aria-label='Top'>
          {/* Top navigation */}
          <div className='bg-primary'>
            <div className='flex items-center justify-between h-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              {/* Language selector - comment
              <form className='hidden lg:block lg:flex-1'>
                <div className='flex'>
                  <label htmlFor='desktop-language' className='sr-only'>
                    Language
                  </label>
                  <div className='relative -ml-2 border-transparent rounded-md bg-content group focus-within:ring-2 focus-within:ring-white'>
                    <select
                      id='desktop-currency'
                      name='currency'
                      className='flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-content focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-content'
                    >
                      {languages.map((language) => (
                        <option key={language}>{language}</option>
                      ))}
                    </select>
                    <div className='absolute inset-y-0 right-0 flex items-center pointer-events-none'>
                      <ChevronDownIcon
                        className='w-5 h-5 text-gray-300'
                        aria-hidden='true'
                      />
                    </div>
                  </div>
                </div>
              </form> */}

              <p className='flex-1 text-sm font-medium text-center text-tertary lg:flex-none'>
                Get your travel business listed on safari.sh -{" "}
                <Link href='/pricing' className='underline'>
                  pricing
                </Link>
              </p>

              {/* Login Code - comment
               <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                <a
                  href='#'
                  className='text-sm font-medium text-tertary hover:text-tertary'
                >
                  Create an account
                </a>
                <span className='w-px h-6 bg-gray-600' aria-hidden='true' />
                <a
                  href='#'
                  className='text-sm font-medium text-tertary hover:text-tertary'
                >
                  Sign in
                </a>
              </div> */}
            </div>
          </div>

          {/* Secondary navigation */}
          <div className='bg-background'>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='border-b border-gray-200'>
                <div className='flex items-center justify-between h-16'>
                  {/* Logo (lg+) */}
                  <div className='hidden lg:flex lg:items-center'>
                    <a href='#'>
                      <span className='sr-only'>safari.sh</span>
                      <Image
                        height={40}
                        width={40}
                        className='w-auto h-8'
                        src={Logo}
                        alt=''
                      />
                    </a>
                  </div>

                  <div className='hidden h-full lg:flex'>
                    {/* Mega menus */}
                    <Popover.Group className='ml-8'>
                      <div className='flex justify-center h-full space-x-8'>
                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className='flex items-center text-sm font-medium text-content hover:text-content'
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu open */}
                  <div className='flex items-center flex-1 lg:hidden'>
                    <button
                      type='button'
                      className='p-2 -ml-2 text-gray-400 rounded-md bg-background'
                      onClick={() => setOpen(true)}
                    >
                      <span className='sr-only'>Open menu</span>
                      <Bars3Icon
                        className='w-6 h-6 text-primary'
                        aria-hidden='true'
                      />
                    </button>
                  </div>

                  {/* Logo mobile */}
                  <a href='/' className='lg:hidden'>
                    <span className='sr-only'>safari.sh</span>
                    <Image
                      height={40}
                      width={40}
                      src={Logo}
                      alt=''
                      className='w-auto h-8'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
