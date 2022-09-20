import { FormInput } from '@dh-ticketing/shared/ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Coupon = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {};
  return (
    <div className="py-12 px-12">
      <div className="intro-y flex items-center  mt-8">
        <h2 className="text-lg font-medium mr-auto">User Create</h2>
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
                placeholder="Name"
                label="Name"
              />
            </div>

            <div className="mt-3">
              <FormInput
                id="regular-form-1"
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                required
                label="Email"
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
            <div className="mt-3">
              <FormInput
                id="regular-form-1"
                label="Passport Number Or ID Card"
                name="passport_number"
                type="text"
                placeholder="passport_number"
                className="form-control"
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

export default Coupon;
