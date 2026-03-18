import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full">
      <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 transition-colors duration-200 hover:border-gray-200 dark:border-white/10 dark:bg-white/5">
        <div className="text-primary mb-8 flex h-[56px] w-[56px] items-center justify-center rounded-lg bg-gray-50 dark:bg-white/5 dark:text-white">
          {icon}
        </div>

        <h3 className="mb-4 text-xl font-semibold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>

        <p className="text-body-color flex-grow text-base leading-relaxed">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
