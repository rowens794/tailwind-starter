import React, { ReactElement, useState } from "react";

interface Props {
  buttonItems: {
    name: string;
  }[];
}

export default function index({ buttonItems }: Props): ReactElement {
  let [activeButton, setActiveButton] = useState(0);

  let buttons = buttonItems.map((item, i) => {
    const { name } = item;
    if (i === 0)
      return (
        <ButtonLeft
          name={name}
          active={i === activeButton ? true : false}
          handler={() => setActiveButton(i)}
          key={i}
        />
      );
    if (i === buttonItems.length - 1)
      return (
        <ButtonRight
          name={name}
          active={i === activeButton ? true : false}
          handler={() => setActiveButton(i)}
          key={i}
        />
      );
    if (i !== 0 && i !== buttonItems.length - 1)
      return (
        <ButtonMid
          name={name}
          active={i === activeButton ? true : false}
          handler={() => setActiveButton(i)}
          key={i}
        />
      );
  });

  return <>{buttons}</>;
}

interface ButtonProps {
  name: string;
  active: boolean;
  handler: any;
}

const ButtonLeft = ({ name, active, handler }: ButtonProps): ReactElement => {
  return (
    <>
      {active ? (
        <button
          onClick={handler}
          type="button"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-100 bg-indigo-700 border border-gray-300 rounded-l-md hover:bg-indigo-600 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          {name}
        </button>
      ) : (
        <button
          onClick={handler}
          type="button"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          {name}
        </button>
      )}
    </>
  );
};

const ButtonMid = ({ name, active, handler }: ButtonProps): ReactElement => {
  return (
    <>
      {active ? (
        <button
          onClick={handler}
          type="button"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-100 bg-indigo-700 border border-gray-300 hover:bg-indigo-600 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          {name}
        </button>
      ) : (
        <button
          onClick={handler}
          type="button"
          className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          {name}
        </button>
      )}
    </>
  );
};

const ButtonRight = ({ name, active, handler }: ButtonProps): ReactElement => {
  return (
    <>
      {active ? (
        <button
          onClick={handler}
          type="button"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-100 bg-indigo-700 border border-gray-300 rounded-r-md hover:bg-indigo-600 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          {name}
        </button>
      ) : (
        <button
          onClick={handler}
          type="button"
          className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          {name}
        </button>
      )}
    </>
  );
};
