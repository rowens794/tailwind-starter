import React, { ReactElement } from "react";

import DecorativeSVG from "../../../components/decorativeComponents/DecorativeSVG";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

interface Props {
  color: string;
}

export default function index({ color }: Props): ReactElement {
  return (
    <div className="bg-gray-50">
      <div className="relative overflow-hidden">
        <DecorativeSVG />

        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Data to enrich your</span>
                <span className={`block text-${color}-600`}>
                  online business
                </span>
              </h1>
              <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-gray-800" />
          </div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <img
              className="relative rounded-lg shadow-lg"
              src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold tracking-wide text-center text-gray-400 uppercase">
            Trusted by over 26,000 forward-thinking companies
          </h2>
          <div className="grid grid-cols-2 gap-8 mt-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
            <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
              />
            </div>
            <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="flex justify-center col-span-1 md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
              />
            </div>
            <div className="flex justify-center col-span-2 md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
