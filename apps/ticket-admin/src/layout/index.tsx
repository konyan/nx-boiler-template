import { useState } from 'react';
import { HomeSVG } from '../assets/icons/sidebar';
import SidebarDrawer from './sidebar/Drawer';
import { ReactNode } from 'react';
import ProfileSection from './sidebar/profileSection';
import SectionList from './sidebar/sectionList';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <SidebarDrawer setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}>
        <SectionList />
      </SidebarDrawer>
      <div className="flex flex-col md:pl-64">
        {/* profile */}
        <ProfileSection setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 min-h-screen mt-[40px] md:mt-0">
          {children}
        </main>
      </div>
    </div>
  );
}
