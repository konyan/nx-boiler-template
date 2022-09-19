import { DialogBox, FormInput } from '@dh-ticketing/shared/ui';
import {
  PhotographIcon,
  MenuIcon,
  ScissorsIcon,
  TrashIcon,
  LinkIcon,
} from '@heroicons/react/outline';
import { DropZoneHoc } from '@dh-ticketing/shared-hooks';
import React from 'react';
import { useState } from 'react';

interface UploadDialogProps {
  open: boolean;
  onClose: (v: boolean) => void;
  callback: () => void;
}
const UploadDialog = ({ open, onClose, callback }: UploadDialogProps) => {
  const [UploadData, setUploadData] = useState('');
  return (
    <DialogBox size="extra" title="Upload Media" open={open} onClose={onClose}>
      <div className="grid grid-cols-2 gap-[10px]">
        {/* RightSide Menu */}

        <div className="h-full">
          <div className="w-full h-[300px]">
            <DropZoneHoc
              callback={(file) => {
                console.log(file);
              }}
            >
              <div className=" flex flex-col items-center w-full h-full">
                <PhotographIcon className="mb-1 w-6 h-6" />

                <button className="flex-1 rounded-full border border-transparent bg-indigo-600 py-2 px-4 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Upload image
                </button>

                <p>Drop image to upload</p>
                <div className="text-center">
                  <p className="text-xs ">File type: JPG, PNG or GIF</p>
                  <p className="text-xs ">{'File size: <500kb'}</p>
                </div>
              </div>
            </DropZoneHoc>
          </div>
          <div className="mx-6 mt-3 gap-[10px] hidden items-center  rounded-lg bg-gray-100 px-0.5 py-3 sm:flex">
            <button
              type="button"
              className="ml-0.5 rounded-md hover:bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <TrashIcon className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Use list view</span>
            </button>
            <button
              type="button"
              className="ml-0.5 rounded-md hover:bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <LinkIcon className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Use grid view</span>
            </button>
            <button
              type="button"
              className="ml-0.5 rounded-md hover:bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <ScissorsIcon className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Use grid view</span>
            </button>
          </div>
        </div>
        {/* left Side Menu */}

        <div className="px-[20px]">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-md">Size:</p>
            </div>
            <div>
              <p className="text-md">Date:</p>
            </div>
            <div>
              <p className="text-md">Dimensions:</p>
            </div>
            <div>
              <p className="text-md">Extension:</p>
            </div>
          </div>
          <div className="mt-5">
            <FormInput
              disabled
              id="Name"
              label="File Name"
              name="file_name"
              type="text"
              placeholder="File Name"
              className="form-control"
            />
          </div>
          <div className="mt-5">
            <FormInput
              id="regular-form-1"
              label="Alternated Name"
              name="Alternated_Name"
              type="text"
              placeholder="Alternated Name"
              className="form-control"
            />
          </div>
          <div className="mt-5">
            <FormInput
              id="regular-form-1"
              label="Caption"
              name="caption"
              type="text"
              placeholder="caption"
              className="form-control"
            />
          </div>
          <div className="mt-5 text-end  w-full">
            <button className=" rounded-full border border-transparent bg-indigo-600 py-2 px-4 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Upload image
            </button>
          </div>
        </div>
      </div>
    </DialogBox>
  );
};

export default UploadDialog;
