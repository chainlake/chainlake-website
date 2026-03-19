"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="flex items-center gap-3 py-4">
                  <Image
                    src="/images/logo/logo.svg"
                    alt="logo"
                    width={28}
                    height={28}
                  />
                  <span className="text-[22px] font-semibold tracking-[-0.02em] text-black dark:text-white">
                    Chainlake
                  </span>
                </Link>
                <p className="text-body-color dark:text-body-color-dark mb-9 text-base leading-relaxed">
                  Unified blockchain data platform for real-time ingestion,
                  analytics, and developer APIs.
                </p>
                <div className="flex items-center">
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mr-6 duration-300"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/chainlake"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mr-6 duration-300"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12C0 17.3 3.438 21.8 8.205 23.385C8.805 23.498 9.025 23.13 9.025 22.815C9.025 22.53 9.015 21.78 9.01 20.775C5.672 21.495 4.968 19.335 4.968 19.335C4.422 17.945 3.633 17.58 3.633 17.58C2.546 16.845 3.717 16.86 3.717 16.86C4.922 16.945 5.555 18.105 5.555 18.105C6.625 19.935 8.36 19.41 9.05 19.11C9.158 18.33 9.467 17.805 9.81 17.505C7.145 17.205 4.344 16.17 4.344 11.55C4.344 10.23 4.809 9.15 5.579 8.31C5.455 8.01 5.049 6.78 5.695 5.115C5.695 5.115 6.705 4.8 9 6.36C9.96 6.09 10.98 5.955 12 5.955C13.02 5.955 14.04 6.09 15 6.36C17.295 4.8 18.305 5.115 18.305 5.115C18.951 6.78 18.545 8.01 18.421 8.31C19.191 9.15 19.656 10.23 19.656 11.55C19.656 16.185 16.85 17.2 14.175 17.495C14.61 17.865 15 18.6 15 19.725C15 21.345 14.985 22.455 14.985 22.815C14.985 23.13 15.205 23.505 15.81 23.385C20.577 21.795 24 17.295 24 12C24 5.37 18.63 0 12 0Z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary duration-300"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-semibold text-black dark:text-white">
                  Products
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/blog"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-semibold text-black dark:text-white">
                  Terms
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      TOS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-semibold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/contact"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      Open Support Ticket
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-body-color text-center text-base dark:text-white">
              Chainlake © 2026. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
