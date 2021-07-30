import React, { ReactElement } from "react";
import { useRouter } from "next/router";

import {
  ChartBarIcon,
  EmojiHappyIcon,
  HomeIcon,
  TicketIcon,
  CreditCardIcon,
  CogIcon,
  SupportIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Dashboard", icon: HomeIcon, href: "/dashboard" },
  {
    name: "Attractions",
    icon: TicketIcon,
    href: "/attractions",
  },
  {
    name: "Campaigns",
    icon: ChartBarIcon,
    href: "/campaigns",
  },
  { name: "Fans", icon: EmojiHappyIcon, href: "/fans" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  color: string;
}

export default function index({ color }: Props): ReactElement {
  const path = useRouter().pathname.slice(1, useRouter().pathname.length);
  return (
    <>
      <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto ">
        <div className="flex items-center flex-shrink-0 pl-4">
          <img
            className="w-auto h-8"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
            alt="Workflow"
          />
        </div>
        <nav
          className="flex-1 px-2 mt-5 space-y-1 bg-white"
          aria-label="Sidebar"
        >
          {navigation.map((item, i) => {
            const { name, icon, href } = item;
            return (
              <MenuItem
                name={name}
                icon={icon}
                href={href}
                key={i}
                color={color}
                current={name.toLocaleLowerCase() === path}
              />
            );
          })}
        </nav>
      </div>

      <div className="absolute flex flex-col flex-grow-0 w-64 pt-4 pb-8 border-t bg-gray-50 bottom-1">
        <div className="px-4">
          <MenuItem
            name="Subscription"
            icon={CogIcon}
            href={"/subscription"}
            color={color}
            current={"subscription" === path}
          />
          <MenuItem
            name="Settings"
            icon={CogIcon}
            href={"/settings"}
            color={color}
            current={"settings" === path}
          />
          <MenuItem
            name="Help"
            icon={SupportIcon}
            href={"/help"}
            color={color}
            current={"help" === path}
          />
        </div>
      </div>
    </>
  );
}

interface Fields {
  name: string;
  icon: any;
  href: string;
  current: boolean;
  color: string;
}

const MenuItem = ({
  name,
  icon,
  href,
  current,
  color,
}: Fields): ReactElement => {
  const Icon = icon;
  return (
    <a
      key={name}
      href={href}
      className={classNames(
        current
          ? `bg-${color}-100 text-${color}-900 hover:text-${color}-900 hover:bg-${color}-100`
          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
      )}
    >
      <Icon
        className={classNames(
          current
            ? `text-${color}-700`
            : "text-gray-400 group-hover:text-gray-500",
          "mr-3 flex-shrink-0 h-6 w-6"
        )}
        aria-hidden="true"
      />
      <span className="flex-1">{name}</span>
    </a>
  );
};
