import React, { ReactElement } from "react";
import { ExternalLinkIcon } from "@heroicons/react/solid";

interface Props {
  color: string;
}

export default function index({ color }: Props): ReactElement {
  return (
    <div className={`bg-${color}-50`}>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className={`block text-${color}-600`}>
            Start your free trial today.
          </span>
        </h2>
        <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className={`inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-${color}-600 border border-transparent rounded-md hover:bg-${color}-700`}
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
