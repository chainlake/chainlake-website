import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-[linear-gradient(180deg,#dbeafe_0%,#eaf4ff_45%,#ffffff_100%)] pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        {/* Grid */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(29,161,242,1)_1px,transparent_1px),linear-gradient(90deg,rgba(29,161,242,1)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.03]" />
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl leading-tight font-semibold text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight dark:text-white">
                  Blockchain Data Lakehouse
                </h1>
                <p className="text-body-color dark:text-body-color-dark mb-12 text-base leading-relaxed! sm:text-lg md:text-xl">
                  From blockchain ingestion to real-time analytics, Chainlake
                  combines streaming pipelines, scalable compute, and fast query
                  infrastructure for Web3 applications.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Link
                    href="/error"
                    className="bg-primary hover:bg-primary/80 rounded-md px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/error"
                    className="inline-block rounded-md bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
