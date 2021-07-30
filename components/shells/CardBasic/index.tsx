import React, { ReactElement } from "react";

interface Props {
  children: ReactElement[] | ReactElement;
}

export default function Index({ children }: Props): ReactElement {
  return (
    <>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">{children}</div>
      </div>
    </>
  );
}
