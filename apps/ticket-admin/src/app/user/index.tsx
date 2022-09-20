import {
  EmojiHappyIcon,
  PhoneIcon,
  DotsVerticalIcon,
} from '@heroicons/react/solid';
import React, {
  Fragment,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiService } from '../../api/nodeServer';

import { Menu, Transition } from '@headlessui/react';
import { classNames, UserListType } from '@dh-ticketing/shared-modal';
import { DialogBox, Drawer, FormInput } from '@dh-ticketing/shared/ui';
import { MobileProps } from './create';

import ReactPhoneInput, { CountryData } from 'react-phone-input-2';
import HeaderWrapper from '../../components/HeaderWrapper';

export default function UserListPage() {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [userList, setUserList] = useState<UserListType[] | null>();
  const [selectedDelete, setSelectedDeleted] = useState<string>('');
  const [DetailOpen, setDetailOpen] = useState(false);
  const [userDetail, setUserDetail] = useState<UserListType | null>();
  const [mobile, setMobile] = useState<MobileProps>({
    country_code: '',
    phone: '',
  });
  const navigate = useNavigate();
  const fetchUserList = async () => {
    await ApiService.get('admin/user').then((res) =>
      setUserList(res.data.data)
    );
  };
  const handleAddUser = () => {
    navigate('/admin/user/create');
  };

  const handleDelete = async (id: string) => {
    await ApiService.delete(`/admin/user/${id}`).then((res) => {
      fetchUserList();
      setSelectedDeleted('');
      setDeleteConfirmationModal(false);
    });
  };

  const handleUpdateDetail = (person: UserListType) => {
    setUserDetail(person);
    setMobile({ country_code: person.country_code, phone: person.phone });
    setDetailOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (userDetail) {
      setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
    }
  };

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!mobile.phone || !mobile.country_code) {
      return alert('Field Required');
    }

    const createData = {
      id: userDetail?.id,
      name: userDetail?.name,
      email: userDetail?.email,
      passport_number: userDetail?.passport_number,
      country_code: mobile.country_code,
      phone: mobile.phone,
    };
    console.log(createData);
    await ApiService.put('/admin/user', createData).then((res) => {
      if (res.status === 200) {
        navigate('/admin/customer');
      }
    });
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <div>
      <HeaderWrapper
        title="Staff"
        ButtonProps={() => {
          return (
            <button
              type="button"
              onClick={handleAddUser}
              className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create
            </button>
          );
        }}
      >
        Search
      </HeaderWrapper>
      <Drawer title="Update User" open={DetailOpen} onClose={setDetailOpen}>
        <form onSubmit={handleUpdate} className="intro-y box p-5">
          <div>
            <FormInput
              required
              autoFocus
              onChange={handleChange}
              value={userDetail?.name}
              id="regular-form-1"
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              label="Name"
            />
          </div>

          <div className="mt-3">
            <FormInput
              onChange={handleChange}
              id="regular-form-1"
              type="email"
              name="email"
              placeholder="email"
              className="form-control"
              required
              label="Email"
              value={userDetail?.email}
            />
          </div>

          <div className="mt-3">
            <FormInput
              onChange={handleChange}
              id="regular-form-1"
              label="Passport Number Or ID Card"
              name="passport_number"
              type="text"
              placeholder="passport_number"
              className="form-control"
              value={userDetail?.passport_number}
            />
          </div>

          <div className="mt-3">
            <ReactPhoneInput
              buttonStyle={{
                padding: '16px',
                backgroundColor: 'transparent',
                borderRadius: '6px 0 0 6px',
              }}
              inputStyle={{
                width: '100%',
                borderRadius: '6px',
                fontSize: '16px',
                fontFamily: 'hero-new, sans-serif',
              }}
              // onBlur={handleBlur}
              countryCodeEditable={false}
              country={mobile.phone || mobile.country_code ? '' : 'th'}
              placeholder="+66 4567 5678"
              value={`${mobile.country_code}${mobile.phone}`}
              onChange={(value, country: CountryData) => {
                setMobile({
                  country_code: country.dialCode,
                  phone: value.slice(country.dialCode.length),
                });
              }}
            />
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
              Update
            </button>
          </div>
        </form>
      </Drawer>
      <ul
        role="list"
        className="py-8 px-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
      >
        {userList &&
          userList?.map((person: UserListType) => (
            <li
              key={person.email}
              className="col-span-1 relative flex flex-col divide-y divide-gray-200 rounded-lg bg-white  shadow"
            >
              <div className="px-5 py-8">
                <img
                  className="mx-auto h-16 w-16 left-[20px] absolute top-[-25px]  rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt=""
                />
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
                                handleUpdateDetail(person);
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
                                setSelectedDeleted(person.id);
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

                <h3 className="mt-6 text-md font-medium text-gray-900">
                  {person?.name.toUpperCase()}
                </h3>

                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-500">
                    PassPort:{'   '}
                    {person.passport_number ? person.passport_number : '______'}
                  </dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="mt-3">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      {person.member_level?.name
                        ? person.member_level?.name
                        : 'UNASSIGN'}
                    </span>
                  </dd>
                  <dd className="text-sm mt-3 gap-3 flex text-gray-500">
                    <EmojiHappyIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <p>Email: </p>
                    <a
                      href={`mailto:${person.email}`}
                      className="relative items-center  text-indigo-500 justify-center rounded-br-lg border border-transparent  text-sm font-medium"
                    >
                      {person.email}
                    </a>
                  </dd>
                  <dd className="text-sm mt-3 gap-2 flex text-gray-500">
                    <PhoneIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <p>Phone:</p>
                    <a
                      href={`tel:${person.phone}`}
                      className="relative items-center  text-indigo-500 justify-center rounded-br-lg border border-transparent  text-sm font-medium"
                    >
                      {person.phone}
                    </a>
                  </dd>
                </dl>
              </div>
              {/* <div>
                 <div className="-mt-px flex divide-x divide-gray-200">
                  {/* <div className="flex w-0 flex-1"></div> 
                  <div className="-ml-px flex w-0 flex-1">
                    <p className="relative w-full flex flex-col items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                      Total Revenue
                      <span className="ml-3">Baht 0.00</span>
                    </p>
                  </div>
                </div>
              </div>*/}
            </li>
          ))}
      </ul>

      <DialogBox
        size="md"
        open={deleteConfirmationModal}
        onClose={setDeleteConfirmationModal}
        title="Are you Sure!"
      >
        <div className="mt-2">
          <div className="py-6">
            <p className="text-md ">
              This will Delete the User And UnRecovered.
            </p>
          </div>
          <div className="mt-4 text-end w-full ml-auto">
            <button
              type="button"
              className={`inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white 
                     bg-red-600 hover:bg-indigo-700
                  `}
              onClick={() => handleDelete(selectedDelete)}
            >
              Update User
            </button>
          </div>
        </div>
      </DialogBox>
    </div>
  );
}
