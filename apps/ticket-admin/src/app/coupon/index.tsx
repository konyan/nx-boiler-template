import {
  classNames,
  CouponListModal,
  PackageList,
  ticketListType,
} from '@dh-ticketing/shared-modal';
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
import { DotsVerticalIcon } from '@heroicons/react/outline';
import moment from 'moment';
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiService } from '../../api/nodeServer';
import HeaderWrapper from '../../components/HeaderWrapper';

const CouperHeader = [
  'Coupon Code',
  'Discount Type',
  'Start Date',
  'End Date',
  'Usage Limit',
  'Max Amount',
  'Action',
];

const CouponPage = () => {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [Coupon, setCouponList] = useState<CouponListModal[]>();

  const navigate = useNavigate();
  const fetchCouponList = async () => {
    await ApiService.get('/admin/coupon?page=1&limit=10&orderBy=asc').then(
      (res) => setCouponList(res.data.data)
    );
  };
  const handleAddCoupon = () => {
    navigate('/admin/coupon/create');
  };

  const handleDelete = async (id: string) => {
    await ApiService.delete(`/admin/user/${id}`).then((res) => {
      fetchCouponList();

      setDeleteConfirmationModal(false);
    });
  };

  useEffect(() => {
    fetchCouponList();
  }, []);
  return (
    <div>
      <HeaderWrapper
        title="Coupon"
        ButtonProps={() => {
          return (
            <button
              onClick={handleAddCoupon}
              type="submit"
              className="btn  ml-3 inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create
            </button>
          );
        }}
      ></HeaderWrapper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {CouperHeader.map((n: string, idx) => (
                <TableHeadCell key={idx}>{n}</TableHeadCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {Coupon?.map((pc: CouponListModal, idx) => (
              <TableRow key={idx}>
                <TableBodyCell>{pc.code}</TableBodyCell>
                <TableBodyCell>{pc.discount_type}</TableBodyCell>
                <TableBodyCell>
                  {moment(pc.start_date).format('YYYY/MM/DDDD')}
                </TableBodyCell>
                <TableBodyCell>
                  {moment(pc.end_date).format('YYYY/MM/DDDD')}
                </TableBodyCell>
                <TableBodyCell>{pc.usage_limit}</TableBodyCell>
                <TableBodyCell>{pc.max_amount}</TableBodyCell>

                <TableBodyCell>
                  <Menu as="div" className="inline-block text-left">
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
                      <Menu.Items className="absolute right-10 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                </TableBodyCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CouponPage;
