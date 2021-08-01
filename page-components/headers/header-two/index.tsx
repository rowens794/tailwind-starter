import React, { ReactElement } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuAlt1Icon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";

import Logo from "../../../components/logos/Logo-WB";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  color: string;
}

export default function index({ color }: Props): ReactElement {
  return (
    <header className="fixed top-0 z-50 w-screen">
      <Disclosure as="nav" className={`flex-shrink-0 bg-${color}-600 `}>
        {({ open }) => (
          <>
            <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                {/* Logo section */}
                <div className="flex items-center px-2 lg:px-0 xl:w-64">
                  <div className="flex-shrink-0">
                    <img
                      className="w-auto h-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                      alt="Workflow"
                    />
                  </div>
                </div>

                {/* Search section */}
                <div className="flex justify-center flex-1 lg:justify-end">
                  <div className="w-full px-2 lg:px-6">
                    <label htmlFor="search" className="sr-only">
                      Search projects
                    </label>
                    <div
                      className={`relative text-${color}-200 focus-within:text-gray-400`}
                    >
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <SearchIcon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className={`block w-full py-2 pl-10 pr-3 leading-5 text-${color}-100 placeholder-${color}-200 bg-${color}-400 bg-opacity-25 border border-transparent rounded-md focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm`}
                        placeholder="Search projects"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button
                    className={`inline-flex items-center justify-center p-2 text-${color}-400 bg-${color}-600 rounded-md hover:text-white hover:bg-${color}-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${color}-600 focus:ring-white`}
                  >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuAlt1Icon
                        className="block w-6 h-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                {/* Links section */}
                <div className="hidden lg:block lg:w-80">
                  <div className="flex items-center justify-end">
                    <div className="flex">
                      <a
                        href="#"
                        className={`px-3 py-2 text-sm font-medium text-${color}-200 rounded-md hover:text-white`}
                      >
                        Documentation
                      </a>
                      <a
                        href="#"
                        className={`px-3 py-2 text-sm font-medium text-${color}-200 rounded-md hover:text-white`}
                      >
                        Support
                      </a>
                    </div>
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative flex-shrink-0 ml-4">
                      {({ open }) => (
                        <>
                          <div>
                            <Menu.Button
                              className={`flex text-sm text-white bg-${color}-700 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${color}-700 focus:ring-white`}
                            >
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="w-8 h-8 rounded-full"
                                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              static
                              className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    View Profile
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Settings
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Logout
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="px-2 pt-2 pb-3">
                <a
                  href="#"
                  className={`block px-3 py-2 text-base font-medium text-white bg-${color}-800 rounded-md`}
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className={`block px-3 py-2 mt-1 text-base font-medium text-${color}-200 rounded-md hover:text-${color}-100 hover:bg-${color}-600`}
                >
                  Support
                </a>
              </div>
              <div className={`pt-4 pb-3 border-t border-${color}-800`}>
                <div className="px-2">
                  <a
                    href="#"
                    className={`block px-3 py-2 text-base font-medium text-${color}-200 rounded-md hover:text-${color}-100 hover:bg-${color}-600`}
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className={`block px-3 py-2 mt-1 text-base font-medium text-${color}-200 rounded-md hover:text-${color}-100 hover:bg-${color}-600`}
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className={`block px-3 py-2 mt-1 text-base font-medium text-${color}-200 rounded-md hover:text-${color}-100 hover:bg-${color}-600`}
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
