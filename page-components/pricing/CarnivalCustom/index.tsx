import React, { ReactElement } from "react";
import { CheckIcon } from "@heroicons/react/outline";
import Toggle from "../../../components/buttons/ToggleWithDesc";

const pricing = {
  tiers: [
    {
      planName: "free",
      title: "Try Us Out",
      price: "Free",
      description: "Try out the Product Risk Free",
      features: [
        "1 Game",
        "Signup 10 Fans / Month",
        "Basic analytics",
        "Basic Support Documentation",
      ],
    },
    {
      planName: "startup",
      title: "Startup",
      price: "$10",
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "5 Games",
        "Up to 250 Fans / Month",
        "Advanced analytics",
        "24-hour support response time",
      ],
    },
    {
      planName: "established",

      title: "Established Seller",
      price: "$25",
      description: "Grow your customer base with ease.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "24-hour, dedicated support response time",
      ],
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  color: string;
  currentPlan: string;
}

export default function index({ color, currentPlan }: Props): ReactElement {
  return (
    <div className="p-4 mx-auto bg-white max-w-7xl sm:x-6 ">
      <div className="flex">
        <p className="flex-1 max-w-2xl p-8 text-xl text-gray-700">
          Make changes to your subscription.
        </p>
        <div className="flex-grow"></div>
        <div className="flex">
          <Toggle color={color} />
        </div>
      </div>

      {/* Tiers */}
      <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className="relative flex flex-col p-8 bg-white border border-gray-200 shadow-sm rounded-2xl"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                {tier.title}
              </h3>

              <p className="flex items-baseline mt-4 text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  {tier.price}
                </span>
              </p>
              <p className="mt-6 text-gray-500">{tier.description}</p>

              {/* Feature list */}
              <ul role="list" className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon
                      className={`flex-shrink-0 w-6 h-6 text-${color}-500`}
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {currentPlan !== tier.planName ? (
              <button
                onClick={() => console.log("Plan changed")}
                className={`bg-${color}-50 text-${color}-700 hover:bg-${color}-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium`}
              >
                Change Plan
              </button>
            ) : (
              <button
                onClick={() => console.log("Plan changed")}
                className={`bg-${color}-500 text-white hover:bg-${color}-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium`}
              >
                Current Plan
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
