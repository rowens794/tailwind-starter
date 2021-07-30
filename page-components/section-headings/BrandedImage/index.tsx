import React, { ReactElement } from "react";

interface Props {
  color: string;
}

export default function index({ color }: Props): ReactElement {
  return (
    <div className={`relative bg-${color}-800`}>
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
        />
        <div
          className={`absolute inset-0 bg-${color}-800 mix-blend-multiply`}
          aria-hidden="true"
        />
      </div>
      <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Get in touch
        </h1>
        <p className={`max-w-3xl mt-6 text-xl text-${color}-100`}>
          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
          lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
          consectetur. Sit justo viverra non adipisicing elit distinctio.
        </p>
      </div>
    </div>
  );
}
