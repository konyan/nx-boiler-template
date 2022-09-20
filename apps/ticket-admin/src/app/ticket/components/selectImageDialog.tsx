import { DialogBox, FormInput } from '@dh-ticketing/shared/ui';
import {
  PhotographIcon,
  MenuIcon,
  ScissorsIcon,
  TrashIcon,
  LinkIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import { DropZoneHoc } from '@dh-ticketing/shared-hooks';
import React from 'react';
import { useState } from 'react';
import { classNames } from '@dh-ticketing/shared-modal';

interface SelectImageDialogProps {
  open: boolean;
  selectedFile: any;
  onClose: (v: boolean) => void;
  callback: () => void;
}
const SelectImageDialog = ({
  open,
  onClose,
  selectedFile,
  callback,
}: SelectImageDialogProps) => {
  const [UploadData, setUploadData] = useState('');
  return (
    <DialogBox size="extra" title="Upload Media" open={open} onClose={onClose}>
      <div className="flex gap-[20px]">
        {/* RightSide Menu */}
        <div className="h-full text-center  mt-[50px] w-[200px]">
          <div className="border  h-[400px] overflow-y-auto overflow-hidden p-3 w-full h-full rounded">
            <div>
              {selectedFile.map((file: any) => (
                <div className="mb-2">
                  <div
                    className={classNames(
                      'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500',
                      'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden'
                    )}
                  >
                    <img
                      src={file.source}
                      alt=""
                      className={classNames('object-cover pointer-events-none')}
                    />
                    <button
                      type="button"
                      className="absolute inset-0 focus:outline-none"
                    >
                      <span className="sr-only">
                        View details for {file.name}
                      </span>
                    </button>
                  </div>
                  <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                    {file.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3">
            <p className="text-md font-bold">Selected Image </p>
          </div>
        </div>
        {/* left Side Menu */}
        <div className="h-full w-full">
          <div className=" relative mb-3 gap-[10px] hidden items-center  rounded-lg  px-0.5  sm:flex">
            <div className="pointer-events-none w-full absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="block bg-gray-100 w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Search"
            />
          </div>
          <div className="w-full h-full">
            <div className="border  h-[400px] overflow-y-auto overflow-hidden p-3 w-full h-full rounded">
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {selectedFile.map((file: any) => (
                  <div>
                    <div
                      className={classNames(
                        'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500',
                        'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden'
                      )}
                    >
                      <img
                        src={file.source}
                        alt=""
                        className={classNames(
                          'object-cover pointer-events-none'
                        )}
                      />
                      <button
                        type="button"
                        className="absolute inset-0 focus:outline-none"
                      >
                        <span className="sr-only">
                          View details for {file.name}
                        </span>
                      </button>
                    </div>
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                      {file.name}
                    </p>
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                      {file.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 text-end justify-end flex gap-2 w-full">
            <button className=" rounded-full border border-transparent bg-indigo-600 py-2 px-4 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              save
            </button>
            <button
              onClick={() => onClose(false)}
              className=" rounded-full border border-indigo-600 bg-transparent py-2 px-4 text-xs font-medium text-indigo-600 hover:text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </DialogBox>
  );
};

export default SelectImageDialog;
