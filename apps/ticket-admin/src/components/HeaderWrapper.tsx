import { Button } from '@dh-ticketing/shared/ui';
import { ArrowRightIcon } from '@heroicons/react/outline';
import React, { ReactNode } from 'react';

interface HeaderWrapperProps {
  title: string;
  ButtonProps?: () => JSX.Element;
  children?: ReactNode;
}
const HeaderWrapper = ({
  children,
  title,
  ButtonProps,
}: HeaderWrapperProps) => {
  return (
    <div className="px-12 py-16 bg-[#f9f9f9]">
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-3xl font-bold leading-7 text-black sm:truncate sm:text-3xl sm:tracking-tight">
            {title}
          </h2>
          <div className="mt-3">{children}</div>
        </div>
        <div className="mt-4 flex flex-shrink-0 md:mt-0 md:ml-4">
          {ButtonProps && ButtonProps()}
        </div>
      </div>
    </div>
  );
};

export default HeaderWrapper;
