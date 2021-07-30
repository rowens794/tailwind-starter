import React, { ReactElement } from "react";

interface Props {
  children: ReactElement[] | ReactElement;
}

export default function index({ children }: Props): ReactElement {
  return <div className="w-full text-center">{children}</div>;
}
