import React, { ReactElement } from "react";

interface Props {
  title: string;
}

export default function index({ title }: Props): ReactElement {
  return (
    <div className="pb-5 ">
      <h2 className="text-xl font-bold leading-6 text-gray-900">{title}</h2>
    </div>
  );
}
