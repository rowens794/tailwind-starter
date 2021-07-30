import React, { ReactElement } from "react";

const tabs = [
  { name: "Applied", href: "#", current: false },
  { name: "Phone Screening", href: "#", current: false },
  { name: "Interview", href: "#", current: true },
  { name: "Offer", href: "#", current: false },
  { name: "Hired", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  color: string;
  title: string;
  tabs: {
    name: string;
    href: string;
    current: boolean;
  }[];
}

export default function index({ color, title, tabs }: Props): ReactElement {
  return (
    <div className="relative pb-5 sm:pb-0">
      <div className="md:flex md:items-center md:justify-between">
        <h2 className="text-xl font-bold leading-6 text-gray-900">{title}</h2>
        <div className="flex mt-3 md:mt-0 md:absolute md:top-3 md:right-0">
          <button
            type="button"
            className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`}
          >
            Share
          </button>
          <button
            type="button"
            className={`inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white bg-${color}-600 border border-transparent rounded-md shadow-sm hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`}
          >
            Create
          </button>
        </div>
      </div>
      <div className="mt-4">
        <div className="sm:hidden">
          <label htmlFor="current-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="current-tab"
            name="current-tab"
            className={`block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-${color}-500 focus:border-${color}-500 sm:text-sm`}
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="flex -mb-px space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? `border-${color}-500 text-${color}-600`
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                  "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
