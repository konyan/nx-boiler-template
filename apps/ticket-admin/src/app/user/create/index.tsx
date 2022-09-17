import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ReactPhoneInput, { CountryData } from 'react-phone-input-2';
import { ApiService } from '../../../api/nodeServer';
import { FormInput } from '@dh-ticketing/shared/ui';
export interface MobileProps {
  country_code: string;
  phone: string;
}

function CreateUserPage() {
  const [mobile, setMobile] = useState<MobileProps>({
    country_code: '',
    phone: '',
  });

  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!mobile.phone || !mobile.country_code) {
      return alert('Field Required');
    }

    const data = new FormData(event.currentTarget);
    const createData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      passport_number: data.get('passport_number'),
      country_code: mobile.country_code,
      phone: mobile.phone,
    };

    await ApiService.post('/admin/user/create', createData)
      .then((res) => navigate('/admin/user'))
      .catch((err) => alert(err.data.message));
  };

  return (
    <>
      <div className="intro-y flex items-center mt-8">
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
                Create
              </button>
            </div>
          </form>
          {/* END: Form Layout */}
        </div>
      </div>
    </>
  );
}

export default CreateUserPage;
