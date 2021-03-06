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
      <div className="relative flex flex-col min-h-screen">
        {Navigation}

        {/* 3 column wrapper */}
        <div className="flex-1 w-full mx-auto lg:max-w-full lg:flex">
          {/* Left sidebar & main wrapper */}
          <div className="flex-1 w-full bg-white lg:flex">
            <div className="z-10 hidden max-w-sm bg-white shadow-md lg:block xl:border-b-0 xl:flex-shrink-0 xl:w-64 ">
              <div className="hidden w-64 h-full py-3 lg:block">{LeftMenu}</div>
            </div>

            <div className="w-full bg-white lg:min-w-0 lg:flex-nowrap">
              <div className="h-full px-4 py-6 sm:px-6 lg:px-8">{Content}</div>
            </div>
          </div>

          {/* Right sidebar  */}
          <div className="hidden pr-4 shadow-md sm:pr-6 xl:block lg:pr-8 lg:flex-shrink-0 xl:pr-0">
            <div className="hidden h-full px-6 py-6 xl:block lg:w-80">
              {RightMenu}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
