import React, { ReactElement } from "react";
import { PlusIcon } from "@heroicons/react/outline";

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
      className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md`}
    >
      <PlusIcon className="flex-1 inline-block h-4 mr-2 text-gray-600" />
      {title}
    </button>
  );
};
