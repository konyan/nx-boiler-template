import React, { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { classNames } from '@dh-ticketing/shared-modal';
import { BellIcon, MenuIcon } from '@heroicons/react/outline';

interface ProfileSectionProps {
  setSidebarOpen: (v: boolean) => void;
}

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Sign out', href: '#' },
];

const ProfileSection = ({ setSidebarOpen }: ProfileSectionProps) => {
  return (
    <div>
      <div className="sticky w-full   bg-black items-center justify-between  top-0 z-10 flex h-16 flex-shrink-0 md:bg-white">
        <div className="md:hidden flex h-16  gap-3 flex-shrink-0 items-center  px-8">
          <img
            className="h-8 w-auto"
            src="../assets/icons/logo.png"
            alt="Your Company"
          />
          <p className="text-white text-md"> DH-TICKET ADMIN</p>
        </div>
        <div className="hidden md:block   flex flex-1 px-10 mr-10">
          <div className="ml-4 flex items-center gap-[10px]  justify-end md:ml-6">
            <button
              type="button"
              className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="text-md">Need Help?</span>
              {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
            </button>
            <button
              type="button"
              className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <button
          type="button"
          className="border-r px-2 border-gray-200  text-gray-500 rounded-full focus:outline-none h-[40px] w-[40px] focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>

          <MenuIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
