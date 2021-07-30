import React, { ReactElement } from "react";

interface Props {
  color: string;
}

export default function index({ color }: Props): ReactElement {
  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div
          className={`px-6 py-10 bg-${color}-700 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center`}
        >
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Sign up for our newsletter
            </h2>
            <p className={`max-w-3xl mt-4 text-lg text-${color}-100`}>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              Lorem cupidatat commodo. Elit sunt amet fugiat.
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className={`w-full px-5 py-3 placeholder-gray-500 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${color}-700 focus:ring-white`}
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className={`flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-white bg-${color}-500 border border-transparent rounded-md hover:bg-${color}-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${color}-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0`}
              >
                Notify me
              </button>
            </form>
            <p className={`mt-3 text-sm text-${color}-100`}>
              We care about the protection of your data. Read our{" "}
              <a href="#" className="font-medium text-white underline">
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
