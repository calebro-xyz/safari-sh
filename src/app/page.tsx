import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Image from "next/image";
import Navbar from "@/components/navbar";

const products = [
  {
    id: 1,
    name: "Machined Pen",
    color: "Black",
    price: "$35",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
    imageAlt:
      "Black machined steel pen with hexagonal grip and small white logo at top.",
    availableColors: [
      { name: "Black", colorBg: "#111827" },
      { name: "Brass", colorBg: "#FDE68A" },
      { name: "Chrome", colorBg: "#E5E7EB" },
    ],
  },
  {
    id: 2,
    name: "Machined Pen",
    color: "Black",
    price: "$35",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
    imageAlt:
      "Black machined steel pen with hexagonal grip and small white logo at top.",
    availableColors: [
      { name: "Black", colorBg: "#111827" },
      { name: "Brass", colorBg: "#FDE68A" },
      { name: "Chrome", colorBg: "#E5E7EB" },
    ],
  },
  {
    id: 3,
    name: "Machined Pen",
    color: "Black",
    price: "$35",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
    imageAlt:
      "Black machined steel pen with hexagonal grip and small white logo at top.",
    availableColors: [
      { name: "Black", colorBg: "#111827" },
      { name: "Brass", colorBg: "#FDE68A" },
      { name: "Chrome", colorBg: "#E5E7EB" },
    ],
  },
  {
    id: 4,
    name: "Machined Pen",
    color: "Black",
    price: "$35",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
    imageAlt:
      "Black machined steel pen with hexagonal grip and small white logo at top.",
    availableColors: [
      { name: "Black", colorBg: "#111827" },
      { name: "Brass", colorBg: "#FDE68A" },
      { name: "Chrome", colorBg: "#E5E7EB" },
    ],
  },
];
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='bg-background'>
        <div className='py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8'>
          <div className='flex items-center justify-between px-4 sm:px-6 lg:px-0'>
            <h2 className='text-2xl font-bold tracking-tight text-heading'>
              Trending products
            </h2>
            <a
              href='#'
              className='hidden text-sm font-semibold text-primary hover:text-indigo-500 sm:block'
            >
              See everything
              <span aria-hidden='true'> &rarr;</span>
            </a>
          </div>

          <div className='relative mt-8'>
            <div className='relative w-full pb-6 -mb-6 overflow-x-auto'>
              <ul
                role='list'
                className='inline-flex mx-4 space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0'
              >
                {products.map((product) => (
                  <li
                    key={product.id}
                    className='inline-flex flex-col w-64 text-center lg:w-auto'
                  >
                    <div className='relative group'>
                      <div className='w-full overflow-hidden rounded-md bg-tertary aspect-h-1 aspect-w-1'>
                        <Image
                          height={100}
                          width={100}
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className='object-cover object-center w-full h-full group-hover:opacity-75'
                        />
                      </div>
                      <div className='mt-6'>
                        <p className='text-sm text-content'>{product.color}</p>
                        <h3 className='mt-1 font-semibold text-content'>
                          <a href={product.href}>
                            <span className='absolute inset-0' />
                            {product.name}
                          </a>
                        </h3>
                        <p className='mt-1 text-content'>{product.price}</p>
                      </div>
                    </div>

                    <h4 className='sr-only'>Available colors</h4>
                    <ul
                      role='list'
                      className='flex items-center justify-center pt-6 mt-auto space-x-3'
                    >
                      {product.availableColors.map((color) => (
                        <li
                          key={color.name}
                          className='w-4 h-4 border border-black rounded-full border-opacity-10'
                          style={{ backgroundColor: color.colorBg }}
                        >
                          <span className='sr-only'>{color.name}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='flex px-4 mt-12 sm:hidden'>
            <a
              href='#'
              className='text-sm font-semibold text-heading hover:text-primary'
            >
              See everything
              <span aria-hidden='true'> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
