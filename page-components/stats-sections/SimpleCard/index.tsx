import React, { ReactElement } from "react";

interface Props {
  color: string;
}

export default function index({ color }: Props): ReactElement {
  return (
    <div className="pt-12 bg-gray-50 sm:pt-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by developers from over 80 planets
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </p>
        </div>
      </div>
      <div className="pb-12 mt-10 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Pepperoni
                  </dt>
                  <dd
                    className={`order-1 text-5xl font-extrabold text-${color}-600`}
                  >
                    100%
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Delivery
                  </dt>
                  <dd
                    className={`order-1 text-5xl font-extrabold text-${color}-600`}
                  >
                    24/7
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Calories
                  </dt>
                  <dd
                    className={`order-1 text-5xl font-extrabold text-${color}-600`}
                  >
                    100k
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
