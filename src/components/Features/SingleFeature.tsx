import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full">
      <div
        className="group wow fadeInUp flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
        data-wow-delay=".15s"
      >
        <div className="bg-primary/10 text-primary group-hover:bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-xl transition-all duration-300 group-hover:text-white">
          {icon}
        </div>

        <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>

        <p className="text-body-color flex-grow text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
