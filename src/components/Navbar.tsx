"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    { name: "产品", href: "/#product" },
    { name: "特性", href: "/#features" },
    { name: "关于我们", href: "/#about" },
    { name: "评价", href: "/#testimonials" },
    { name: "常见问题", href: "/#faq" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <span>
              <Image
                src="/img/logo.svg"
                width="32"
                alt="N"
                height="32"
                className="w-8"
              />
            </span>
            <span>ECWU Cloud</span>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item">
            <Link href="https://ecwuuuuu.com/post/homelab-journey-intro/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              立即购买
            </Link>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="absolute top-20 left-0 w-full bg-white/95 backdrop-blur-sm shadow-xl border-t border-gray-100 dark:border-gray-800 dark:bg-gray-900/95 lg:hidden">
                <div className="flex flex-col items-center w-full max-w-md mx-auto py-6 space-y-1">
                  {navigation.map((item, index) => (
                    <Link key={index} href={item.href} className="w-full py-3 text-center text-base font-medium text-gray-700 rounded-lg dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none transition-all duration-200">
                      {item.name}
                    </Link>
                  ))}
                  <div className="w-full my-4 border-t border-gray-200 dark:border-gray-700"></div>
                  <Link href="https://ecwuuuuu.com/post/homelab-journey-intro/" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs mx-auto px-6 py-3 text-center text-white bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200 shadow-sm">
                    立即购买
                  </Link>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={item.href} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </div>
  );
}

