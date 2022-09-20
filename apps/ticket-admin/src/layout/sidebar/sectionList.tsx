import { classNames } from '@dh-ticketing/shared-modal';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItemType, MenuItemTypeProps } from '../../constants/MenuType';
import { dashboardList } from '../menu-items';

import { LogoutIcon } from '@heroicons/react/outline';

function NavItem({ menu, activeTab, setClick }: MenuItemTypeProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  useEffect(() => {
    setIsHover(false);
    setClick(false);
  }, [setClick]);

  return (
    <div className="cursor-pointer relative">
      <div
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={classNames(
          menu.id === activeTab ? 'bg-gray-light' : 'rounded',
          'flex items-center gap-[20px]  my-2 hover:bg-gray-light hover:shadow rounded'
        )}
      >
        <div className="flex items-center justify-center w-[36px] h-[36px]">
          <menu.icon
            color={
              menu.id !== activeTab ? (isHover ? '#312e81' : '#fff') : '#312e81'
            }
            className={classNames(
              menu.id !== activeTab
                ? isHover
                  ? 'text-purple'
                  : 'text-white'
                : 'text-purple',
              ' flex-shrink-0 h-6 w-6'
            )}
            aria-hidden="true"
          />
        </div>

        <p
          className={classNames(
            menu.id !== activeTab
              ? isHover
                ? 'text-purple bold'
                : 'text-white bold'
              : 'text-purple bold'
          )}
        >
          {menu.title}
        </p>
      </div>
    </div>
  );
}

function SectionList() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [click, setClick] = useState(false);

  // const leftDrawerOpened = useSelector((state) => state.customization.opened);

  useEffect(() => {
    const currentIndex = location.pathname.split('/');
    if (currentIndex[2]) {
      setActiveTab(currentIndex[2]);
    }
  }, [location]);

  const upper = dashboardList.map((menu: MenuItemType, i: number) => (
    <Link to={menu.url} key={i}>
      <NavItem
        menu={menu}
        activeTab={activeTab}
        setClick={(value: boolean) => setClick(value)}
      />
    </Link>
  ));

  const VersionUI = (
    <div className="flex items-center gap-[20px] absolute bottom-[0] ">
      <div
        style={{
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          className="h-8 w-auto"
          src="../assets/icons/logo.png"
          alt="Your Company"
        />
      </div>

      <p className="text-sm text-white  py-10">
        DH-TICKET for Busines <br />
        Version 1.0.0.0
      </p>
    </div>
  );

  const Logout = (
    <div
      onClick={() => {
        console.log('logout');
      }}
      className="md:hidden cursor-pinter w-full flex items-center gap-[20px] left-[0] px-4 absolute bottom-[80px] "
    >
      <NavItem
        menu={{
          id: 'signout',
          title: 'Sign Out',
          type: 'group',
          icon: LogoutIcon,
          url: '',
          children: [],
        }}
        activeTab={activeTab}
        setClick={(value: boolean) => setClick(value)}
      />
    </div>
  );

  return (
    <div>
      <div className="px-4 py-4">
        <div className="flex h-16  gap-3 flex-shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="../assets/icons/logo.png"
            alt="Your Company"
          />
          <p className="text-white text-md"> DH-TICKET ADMIN</p>
        </div>
        {upper}
        {Logout}
        {VersionUI}
      </div>
    </div>
  );
}

export default SectionList;
