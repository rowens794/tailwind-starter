import React, { ReactElement } from "react";
import { useState } from "react";

interface Props {
  color: string;
}

export default function index({ color }: Props): ReactElement {
  return (
    <div className="px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute transform translate-x-1/2 left-full"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute bottom-0 transform -translate-x-1/2 right-full"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Contact Support
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Are you having trouble? Tell us whats going on and we’ll fix it.
          </p>
        </div>
        <div className="mt-12">
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className={`h-full py-0 pl-4 pr-8 text-gray-500 bg-transparent border-transparent rounded-md focus:ring-${color}-500 focus:border-${color}-500`}
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className={`block w-full px-4 py-3 pl-20 border-gray-300 rounded-md focus:ring-${color}-500 focus:border-${color}-500`}
                  placeholder="+1 (555) 987-6543"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-${color}-500 focus:border-${color}-500`}
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className={`inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-${color}-600 border border-transparent rounded-md shadow-sm hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`}
              >
                Get In Touch
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
