import React, { ReactElement } from "react";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <a href="#">
        <span className="sr-only">Workflow</span>
        <img
          className="w-auto h-8 sm:h-10"
          src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
          alt=""
        />
      </a>
    </div>
  );
}
