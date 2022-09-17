import React from 'React';

export interface MenuItemTypeProps {
  menu: MenuItemType;
  activeTab: string;
  setClick: (value: boolean) => void;
}

export interface MenuItemType {
  id: string;
  title: string;
  type: string;
  icon: ({ color }: React.SVGProps<SVGSVGElement>) => JSX.Element;
  url: string;
  children: MenuChidType[];
}

export interface MenuChidType {
  id: string;
  title: string;
  type: string;
  icon: ({ color }: React.SVGProps<SVGSVGElement>) => JSX.Element;
  url: string;
}
