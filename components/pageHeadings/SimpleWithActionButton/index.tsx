import React, { ReactElement } from "react";

interface Props {
  color: string;
  title: string;
  actionTitle: string;
  actionFunction: any;
}

export default function index({
  color,
  title,
  actionTitle,
  actionFunction,
}: Props): ReactElement {
  return (
    <div className="pb-5 sm:flex sm:items-center sm:justify-between">
      <h2 className="text-xl font-bold leading-6 text-gray-900">{title}</h2>
      <div className="mt-3 sm:mt-0 sm:ml-4">
        <ActionButton
          color={color}
          title={actionTitle}
          clickHandler={actionFunction}
        />
      </div>
    </div>
  );
}

interface ActionButtonProps {
  color: string;
  title: string;
  clickHandler: any;
}

const ActionButton = ({
  color,
  title,
  clickHandler,
}: ActionButtonProps): ReactElement => {
  return (
    <button
      onClick={clickHandler}
      type="button"
      className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-${color}-600 border border-transparent rounded-md shadow-sm hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`}
    >
      {title}
    </button>
  );
};
