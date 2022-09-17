import { classNames } from '@dh-ticketing/shared-modal';
import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
/* eslint-disable-next-line */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  className?: string;
  ref?: string;
  caption?: string;
  error?: boolean;
  errrorMessage?: string;
  Icon?: any;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    className = '',
    caption,
    error,
    errrorMessage,
    Icon,
    ...otherProps
  },
  ref
) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        )}
        <input
          type="email"
          {...otherProps}
          name={name}
          className={classNames(
            className,
            Icon && 'pl-10',
            error
              ? 'block w-full rounded-md border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm'
              : 'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          )}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {caption && (
        <p className="mt-2 text-sm text-gray-500" id="email-description">
          {caption}
        </p>
      )}
      {errrorMessage && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {errrorMessage}
        </p>
      )}
    </div>
  );
};

export const FormInput = React.forwardRef(Input);

export default FormInput;
