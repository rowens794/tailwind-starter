import React, { ReactElement } from "react";

interface Props {
  color: string;
}

export default function index({ color }: Props): ReactElement {
  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <h2 className="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl">
          Want product news and updates?
        </h2>
        <p
          className={`inline text-3xl font-extrabold tracking-tight text-${color}-600 sm:block sm:text-4xl`}
        >
          Sign up for our newsletter.
        </p>
        <form className="mt-8 sm:flex">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={`w-full px-5 py-3 placeholder-gray-500 border-gray-300 rounded-md focus:ring-${color}-500 focus:border-${color}-500 sm:max-w-xs`}
            placeholder="Enter your email"
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              className={`flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-${color}-600 border border-transparent rounded-md hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`}
            >
              Notify me
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
