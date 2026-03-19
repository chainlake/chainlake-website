import PricingSection from "@/components/Pricing/PricingSection";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Chainlake SaaS",
  description:
    "Explore our flexible pricing plans and pay only for the features you need.",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pricing"
        description="Flexible pricing plans tailored to your startup or SaaS needs."
      />
      <PricingSection />
    </>
  );
};

export default PricingPage;
