const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
  ctaText?: string; // 新增 CTA 文案 prop
  highlight?: boolean; // 新增高亮 prop
}) => {
  const {
    price,
    duration,
    packageName,
    subtitle,
    children,
    ctaText,
    highlight,
  } = props;

  return (
    <div className="h-full w-full">
      <div
        className={`relative z-10 flex h-full flex-col justify-between rounded-md bg-white px-8 py-10 transition-all duration-300 ${
          highlight
            ? "border-primary shadow-feature border-2"
            : "shadow-three hover:shadow-one border border-gray-200"
        }`}
        // style={highlight ? { boxShadow: "var(--shadow-feature-2)" } : {}}
      >
        {/* Header */}
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

        {/* Subtitle */}
        <p className="text-body-color mb-7 text-base">{subtitle}</p>

        {/* Offer List */}
        <div>{children}</div>
        <div className="border-body-color/10 mb-8 border-b pb-8 dark:border-white/10"></div>
        {/* CTA Button */}
        <button className="bg-primary/80 hover:shadow-signUp flex w-full items-center justify-center rounded-md p-3 text-base font-semibold text-white transition duration-300 ease-in-out">
          {ctaText || "Start Free Trial"}
        </button>
      </div>
    </div>
  );
};

export default PricingBox;
