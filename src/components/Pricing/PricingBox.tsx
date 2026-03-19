const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, children } = props;

  return (
    <div className="w-full">
      <div className="shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark relative z-10 rounded-md bg-white px-8 py-10">
        <div className="flex items-center justify-between">
          <h3 className="price mb-2 text-[32px] font-semibold text-black dark:text-white">
            $<span className="amount">{price}</span>
            <span className="time text-body-color text-lg font-medium">
              /{duration}
            </span>
          </h3>
          <h4 className="text-dark mb-2 text-xl font-semibold dark:text-white">
            {packageName}
          </h4>
        </div>
        <p className="text-body-color mb-7 text-base">{subtitle}</p>
        <div className="border-body-color/10 mb-8 border-b pb-8 dark:border-white/10">
          <button className="bg-primary/80 hover:shadow-signUp flex w-full items-center justify-center rounded-md p-3 text-base font-semibold text-white transition duration-300 ease-in-out">
            Start Free Trial
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PricingBox;
