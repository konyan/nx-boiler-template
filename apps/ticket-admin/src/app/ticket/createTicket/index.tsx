import { classNames } from '@dh-ticketing/shared-modal';
import {
  CheckboxList,
  Divider,
  FormInput,
  SelectList,
  Timepicker,
} from '@dh-ticketing/shared/ui';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectImageDialog from '../components/selectImageDialog';
import VariantList from '../components/variantlist';

const files = [
  {
    name: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    current: true,
  },
  {
    name: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    current: true,
  },
  {
    name: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    current: true,
  },
  {
    name: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    current: true,
  },
  {
    name: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    current: true,
  },
  // More files...
];

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
];

const CreateTicket = () => {
  const [selected, setSelected] = useState(people[3]);
  const navigate = useNavigate();
  const [varints, setVarints] = useState([
    {
      name: 'Adult',
      price: 0,
      quantity: 0,
      image: '',
      checked: false,
    },
    {
      name: 'Child',
      price: 0,
      quantity: 0,
      image: '',
      checked: false,
    },
    {
      name: 'VIP',
      price: 0,
      quantity: 0,
      image: '',
      checked: false,
    },
  ]);
  // select dialog
  const [dialog, setDialog] = useState(false);
  const handleSubmit = () => {};

  const handlePoliySelect = () => {};

  return (
    <div className="py-12 px-12">
      {/* selected  image dialog */}
      <SelectImageDialog
        open={dialog}
        onClose={setDialog}
        selectedFile={files}
        callback={() => {
          console.log('');
        }}
      />
      <div className="intro-y flex items-center  mt-8">
        <h2 className="text-lg font-medium mr-auto">Ticket Create</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Form Layout */}
          <form onSubmit={handleSubmit} className="intro-y box p-5">
            <div>
              <FormInput
                required
                autoFocus
                id="regular-form-1"
                type="text"
                name="name"
                className="form-control"
                placeholder="ticket name"
                label="Ticket Name"
              />
            </div>

            <div className="mt-3">
              <FormInput
                name="password"
                id="regular-form-1"
                type="password"
                placeholder="Password"
                className="form-control"
                label="Password"
                required
              />
            </div>
            <div className="mt-5">
              <Divider type="" />
            </div>
            <p className="my-4 text-md">Location</p>
            <div className="mt-3 flex gap-3">
              <FormInput
                name="location_lat"
                id="regular-form-1"
                type="password"
                placeholder="Password"
                className="form-control"
                label="Lat"
                required
              />
              <FormInput
                name="password"
                id="regular-form-1"
                type="password"
                placeholder="Password"
                className="form-control"
                label="long"
                required
              />
            </div>
            <div className="mt-5">
              <Divider type="" />
            </div>
            <div className="mt-5">
              <p className="mb-4 text-md">Opening Hours </p>
              <div className="flex gap-2">
                <div>
                  <p className="text-sm mb-2">Starting Hours</p>
                  <Timepicker onChange={() => {}} />
                </div>
                <div>
                  <p className="text-sm mb-2">End Hours</p>
                  <Timepicker onChange={() => {}} />
                </div>
              </div>
            </div>

            <Divider />

            <div className="mt-5">
              <p className="mb-4 text-md">Media</p>{' '}
              <button
                type="submit"
                onClick={() => {
                  setDialog(true);
                }}
                className="btn mb-2  inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Photo
              </button>
              <div className="w-full min-h-[300px] border p-3 rounded-md">
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {files.map((file) => (
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
                      <p className="pointer-events-none block text-sm font-medium text-gray-500">
                        {file.size}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <Divider type="" />
              <div className="mt-5">
                <p className="text-md mb-4">Variants</p>
                <div>
                  <VariantList list={varints} onChange={() => {}} />
                </div>
              </div>
              <Divider type="" />
              <div className="mt-5">
                <p className="text-md mb-4">Policy Settings</p>
                <div className="mb-5">
                  <SelectList
                    title={'Ticket Type'}
                    list={people}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </div>
                <div>
                  <SelectList
                    title={'Cancellation Policy'}
                    list={people}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </div>
              </div>
            </div>

            <div className="text-right mt-5">
              <button
                type="button"
                onClick={() => {
                  navigate('/admin/user');
                }}
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn  ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Create
              </button>
            </div>
          </form>
          {/* END: Form Layout */}
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
