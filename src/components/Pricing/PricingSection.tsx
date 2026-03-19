"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Section Title */}
        <SectionTitle
          title="Transparent & Flexible Pricing"
          paragraph="Choose a plan that fits your needs. Scale from prototype to production effortlessly."
          center
          width="670px"
        />

        {/* Billing Toggle */}
        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "text-primary pointer-events-none"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 bg-primary absolute top-[-4px] left-0 flex h-7 w-7 items-center justify-center rounded-full transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "text-primary pointer-events-none"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Free Plan */}
          <PricingBox
            packageName="Free"
            price={isMonthly ? "0" : "0"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Get started with Chainlake’s core features, access real-time on-chain data and basic analytics for free."
            ctaText="Try it Free"
          >
            <OfferList text="Real-time on-chain data API" status="active" />
            <OfferList text="Basic analytics dashboards" status="active" />
            <OfferList text="Up to 1 project" status="active" />
            <OfferList text="Community email support" status="active" />
            <OfferList text="Custom reports" status="inactive" />
            <OfferList text="Enterprise SLA" status="inactive" />
          </PricingBox>
          {/* Pro Plan */}
          <PricingBox
            packageName="Pro"
            price={isMonthly ? "20" : "80"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Advanced analytics and API access for multiple projects with faster data refresh rates to boost decision-making."
            highlight // 默认高亮
            ctaText="Start with Pro"
          >
            <OfferList text="Real-time on-chain data API" status="active" />
            <OfferList text="Multiple project management" status="active" />
            <OfferList
              text="Advanced visualization components"
              status="active"
            />
            <OfferList text="Priority email support" status="active" />
            <OfferList text="Custom reports" status="active" />
            <OfferList text="Enterprise SLA" status="inactive" />
          </PricingBox>
          {/* Enterprise Plan */}
          <PricingBox
            packageName="Enterprise"
            price={isMonthly ? "100" : "400"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Enterprise-grade solution with dedicated support, custom data pipelines, and SLA services for large-scale blockchain data needs."
            ctaText="Contact Sales"
          >
            <OfferList text="Real-time on-chain data API" status="active" />
            <OfferList
              text="Multiple projects & team management"
              status="active"
            />
            <OfferList
              text="Advanced visualization components"
              status="active"
            />
            <OfferList
              text="Dedicated account manager & support"
              status="active"
            />
            <OfferList text="Custom data pipelines" status="active" />
            <OfferList
              text="Enterprise SLA & custom services"
              status="active"
            />
          </PricingBox>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
