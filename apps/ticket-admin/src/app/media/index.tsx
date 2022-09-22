import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  HeartIcon,
  PlusIcon as PlusIconOutline,
  MenuIcon,
  ViewGridIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import { PencilIcon, PlusIcon as PlusIconMini } from '@heroicons/react/solid';
import { classNames, MediaDetailType } from '@dh-ticketing/shared-modal';
import { Drawer } from '@dh-ticketing/shared/ui';
import UploadDialog from './components/uploadDialog';
import { ApiService } from '../../api/nodeServer';
import ReactPaginate from 'react-paginate';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import moment from 'moment';

const tabs = [
  { name: 'Recently Viewed', href: '#', current: true },
  { name: 'Recently Added', href: '#', current: false },
  { name: 'Favorited', href: '#', current: false },
];
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
  // More files...
];
const currentFile: any = {
  name: 'IMG_4985.HEIC',
  size: '3.9 MB',
  source:
    'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  information: {
    'Uploaded by': 'Marie Culver',
    Created: 'June 8, 2020',
    'Last modified': 'June 8, 2020',
    Dimensions: '4032 x 3024',
    Resolution: '72 x 72',
  },
  sharedWith: [
    {
      id: 1,
      name: 'Aimee Douglas',
      imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80',
    },
    {
      id: 2,
      name: 'Andrea McMillan',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
};

export default function MediaLibary() {
  const [open, setOpen] = useState(false);
  const [uploadDialog, setUploadDialog] = useState(false);
  const limit = 20;
  const [viewStyle, setViewStyle] = useState(false);
  const [filterData, setfilterData] = useState({
    searchTabs: '',
    total: 0,
    currentPage: 0,
  });
  const [selectedImage, setSelectImage] = useState<MediaDetailType>();
  const [imageList, setImageList] = useState<MediaDetailType[]>([]);

  const fetchImageList = async (search: string, skip: number) => {
    await ApiService.get(
      `/admin/images?searchable_text=${search}&skip=${skip}&limit=${limit}`
    ).then((res) => {
      setImageList(res.data.data);
      setfilterData({
        ...filterData,
        total: res.data.total,
      });
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfilterData({ ...filterData, searchTabs: e.target.value });
    fetchImageList(e.target.value, filterData.currentPage);
  };

  const handlePaginate = (event: { selected: number }) => {
    const newOffset = event.selected * limit;
    setfilterData({ ...filterData, currentPage: event.selected });
    fetchImageList(filterData.searchTabs, newOffset);
  };

  useEffect(() => {
    fetchImageList(filterData.searchTabs, 0);
  }, []);

  return (
    <>
      {/* upload Dialog */}
      <UploadDialog
        open={uploadDialog}
        onClose={setUploadDialog}
        callback={() => {
          fetchImageList(filterData.searchTabs, filterData.total);
        }}
      />
      {/* Main content */}
      <div className="flex flex-1 mt-6 items-stretch overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
            <div className="flex">
              <div className="flex w-full justify-between">
                <h1 className="flex-1 text-2xl font-bold text-gray-900">
                  Photos
                </h1>
                <button
                  onClick={() => {
                    setUploadDialog(true);
                  }}
                  type="button"
                  className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <PlusIconOutline className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Use list view</span>
                </button>
              </div>

              <div className="ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden">
                <button
                  type="button"
                  className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <MenuIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Use list view</span>
                </button>
                <button
                  type="button"
                  className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  {/* <Squares2X2IconMini
                        className="h-5 w-5"
                        aria-hidden="true"
                      /> */}
                  <span className="sr-only">Use grid view</span>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className=" sm:mt-2">
              <div className="hidden sm:block">
                <div className="flex mt-5 items-center justify-between border-gray-200">
                  <div className=" relative w-full  gap-[10px] hidden items-center  rounded-lg  px-0.5  sm:flex">
                    <div className="pointer-events-none w-full absolute inset-y-0 left-0 flex items-center pl-3">
                      <SearchIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="text"
                      name="searchTabs"
                      id="searchTabs"
                      onChange={handleChange}
                      className="block bg-white w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Search"
                    />
                  </div>
                  <div className="ml-6 hidden items-center rounded-lg bg-gray-100 p-0.5 sm:flex">
                    <button
                      type="button"
                      onClick={() => setViewStyle(true)}
                      className={classNames(
                        !viewStyle
                          ? 'hover:bg-white hover:shadow-sm'
                          : 'bg-white text-gray-400 shadow-sm',
                        'ml-0.5 rounded-md  p-1.5  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                      )}
                    >
                      <MenuIcon className="h-5 w-5" aria-hidden="true" />
                      <span className="sr-only">Use list view</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewStyle(false)}
                      className={classNames(
                        viewStyle
                          ? 'hover:bg-white hover:shadow-sm'
                          : 'bg-white text-gray-400 shadow-sm',
                        'ml-0.5 rounded-md  p-1.5  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                      )}
                    >
                      <ViewGridIcon className="h-5 w-5" aria-hidden="true" />
                      <span className="sr-only">Use grid view</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
              <h2 id="gallery-heading" className="sr-only">
                Recently viewed
              </h2>
              {viewStyle ? (
                <ul>
                  {imageList?.map((file: any, idx: number) => (
                    <li
                      key={file._id}
                      onClick={() => {
                        setOpen(true);
                        setSelectImage(file);
                      }}
                      className="relative flex items-center py-5 rounded border-b px-5 hover:border hover:border-indigo-300 gap-10"
                    >
                      <p className="pointer-events-none   block truncate text-sm font-medium text-gray-900">
                        {idx + 1 + '.'}
                      </p>
                      <img
                        src={file.image_url}
                        alt=""
                        className={classNames(
                          'object-cover  max-w-[70px] pointer-events-none group-hover:opacity-75'
                        )}
                      />
                      <p className="pointer-events-none   block truncate text-sm font-medium text-gray-900">
                        {file.image_name}
                      </p>
                      <p className="text-sm font-medium text-gray-500">
                        {file.caption}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {imageList?.map((file: any) => (
                    <li
                      key={file._id}
                      onClick={() => {
                        setOpen(true);
                        setSelectImage(file);
                      }}
                      className="relative"
                    >
                      <div
                        className={classNames(
                          file
                            ? 'ring-2 ring-offset-2 ring-indigo-500'
                            : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500',
                          'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden'
                        )}
                      >
                        <img
                          src={file.image_url}
                          alt=""
                          className={classNames(
                            file.current ? '' : 'group-hover:opacity-75',
                            'object-cover pointer-events-none'
                          )}
                        />
                        <button
                          type="button"
                          className="absolute inset-0 focus:outline-none"
                        >
                          <span className="sr-only">
                            View details for {file.image_name}
                          </span>
                        </button>
                      </div>
                      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                        {file.image_name}
                      </p>
                      <p className="text-sm font-medium text-gray-500">
                        {file.caption}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </section>
            <ReactPaginate
              previousLabel={
                filterData.currentPage === 0 ? (
                  ''
                ) : (
                  <ChevronLeftIcon className="w-5 " />
                )
              }
              nextLabel={
                filterData.total === filterData.currentPage ? (
                  ''
                ) : (
                  <ChevronRightIcon className="w-5 " />
                )
              }
              breakLabel={'...'}
              breakClassName={'break-me'}
              activeClassName={'active'}
              containerClassName={'pagination'}
              initialPage={filterData.currentPage}
              pageCount={filterData.total / limit || 0}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePaginate}
            />
          </div>
        </main>

        {/* Details sidebar */}

        <Drawer title="Media Viewer" open={open} onClose={setOpen}>
          <aside className="hidden w-96 overflow-y-auto border-l border-gray-200 bg-white p-8 lg:block">
            <div className="space-y-6 pb-16">
              <div>
                <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
                  <img
                    src={selectedImage?.image_url}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">
                      <span className="sr-only">Details for </span>
                      {selectedImage?.image_name}
                    </h2>
                    <p className="text-sm font-medium text-gray-500">
                      {currentFile.size}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <HeartIcon className="h-6 w-6" aria-hidden="true" />
                    <span className="sr-only">Favorite</span>
                  </button>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Information</h3>
                <dl className="mt-2 divide-y divide-gray-200 border-b border-gray-200">
                  <div className="flex justify-between py-3 text-sm font-medium">
                    <dt className="text-gray-500">Created</dt>
                    <dd className="whitespace-nowrap text-gray-900">
                      {moment(selectedImage?.created_at).format('DD/MMM/YYY')}
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 border-b text-sm font-medium">
                    <dt className="text-gray-500">Updated By</dt>
                    <dd className="whitespace-nowrap text-gray-900">
                      {moment(selectedImage?.updated_at).format('DD/MMM/YYY')}
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Description</h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm italic text-gray-500">
                    {selectedImage?.caption}
                  </p>
                </div>
              </div>

              <div className="flex">
                <button
                  type="button"
                  className="flex-1 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Download
                </button>
                <button
                  type="button"
                  className="ml-3 flex-1 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </aside>
        </Drawer>
      </div>
    </>
  );
}
