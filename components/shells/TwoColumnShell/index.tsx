import React, { ReactElement } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  children: ReactElement[];
}

const Index: React.FC<Props> = ({ children }) => {
  const [Navigation, LeftMenu, Content, RightMenu] = children;
  return (
    <>
      <div className="relative flex flex-col max-h-screen min-h-screen">
        {Navigation}

        {/* 2 column wrapper */}
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 w-full bg-white lg:flex">
          <div className="z-10 hidden max-w-sm bg-white shadow-md lg:block xl:border-b-0 xl:flex-shrink-0 xl:w-64 ">
            <div className="hidden w-64 h-full py-3 lg:block">{LeftMenu}</div>
          </div>

          <div className="w-full bg-white lg:min-w-0 lg:flex-nowrap">
            <div className="px-4 py-6 sm:px-6 lg:px-8">{Content}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
