import { classNames, ticketListType } from '@dh-ticketing/shared-modal';
import {
  Table,
  TableBody,
  TableBodyCell,
  TableContainer,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@dh-ticketing/shared/ui';
import { Menu, Transition } from '@headlessui/react';
import { ArrowRightIcon, DotsVerticalIcon } from '@heroicons/react/outline';
import moment from 'moment';
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiService } from '../../api/nodeServer';
import HeaderWrapper from '../../components/HeaderWrapper';
const TitleList = ['Name', 'Opens hours', ' status', 'Action'];
const TicketList = () => {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [ticketList, setTicketList] = useState<ticketListType[]>();

  const navigate = useNavigate();
  const fetchUserList = async () => {
    await ApiService.get('/admin/ticket?page=1&limit=10&orderBy=asc').then(
      (res) => setTicketList(res.data.data)
    );
  };
  const handleCreateTicket = () => {
    navigate('/admin/ticket/create');
  };

  const handleDelete = async (id: string) => {
    await ApiService.delete(`/admin/user/${id}`).then((res) => {
      fetchUserList();

      setDeleteConfirmationModal(false);
    });
  };

  const handleUpdateDetail = () => {};

  useEffect(() => {
    fetchUserList();
  }, []);
  return (
    <div>
      <HeaderWrapper
        title="Ticket"
        ButtonProps={() => {
          return (
            <button
              type="button"
              onClick={handleCreateTicket}
              className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create
            </button>
          );
        }}
      >
        Search
      </HeaderWrapper>
      <div className="py-5 px-12">
        <ul
          role="list"
          className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {ticketList?.map((project) => (
            <li
              key={project.name}
              className="col-span-1 flex rounded-md border border border shadow-sm"
            >
              <div
                className={classNames(
                  'bg-indigo-red',
                  'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                )}
              >
                {project.code}
              </div>
              <div className="flex flex-1 items-center justify-between truncate rounded-md border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                  <a
                    href={project.id}
                    className="font-medium text-gray-900 hover:text-gray-600"
                  >
                    {project.name}
                  </a>
                  <p className="text-gray-500">{project.opening_hour} </p>
                  <p className="text-gray-500">{project.code} </p>
                </div>

                <div className="flex-shrink-0 pr-2">
                  <button
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">Open options</span>
                    <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                <Menu
                  as="div"
                  className="absolute right-[10px] top-3 ml-3 inline-block text-left"
                >
                  <div>
                    <Menu.Button className="-my-2 flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <span className="sr-only">Open options</span>
                      <DotsVerticalIcon
                        className="h-5 w-5"
                        aria-hidden="true"
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'flex justify-between px-4 py-2 text-sm'
                              )}
                              onClick={() => {
                                // handleUpdateDetail(person);
                              }}
                            >
                              <span>Edit</span>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'flex justify-between px-4 py-2 text-sm'
                              )}
                              onClick={() => {
                                // setSelectedDeleted(person.id);
                                setDeleteConfirmationModal(true);
                              }}
                            >
                              <span>Delete</span>
                            </div>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TicketList;
