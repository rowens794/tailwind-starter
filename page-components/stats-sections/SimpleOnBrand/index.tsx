import React, { ReactElement } from "react";

interface Props {
  color: string;
}

export default function index({ color }: Props): ReactElement {
  return (
    <div className={`bg-${color}-800`}>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by developers from over 80 planets
          </h2>
          <p className={`mt-3 text-xl text-${color}-200 sm:mt-4`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt
              className={`order-2 mt-2 text-lg font-medium leading-6 text-${color}-200`}
            >
              Pepperoni
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">100%</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt
              className={`order-2 mt-2 text-lg font-medium leading-6 text-${color}-200`}
            >
              Delivery
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">24/7</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt
              className={`order-2 mt-2 text-lg font-medium leading-6 text-${color}-200`}
            >
              Calories
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
              100k+
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
