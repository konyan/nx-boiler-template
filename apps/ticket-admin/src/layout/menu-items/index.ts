// assets
import { PhotographIcon, UserIcon } from '@heroicons/react/outline';
import {
  ListSVG,
  ClassSettingSVG,
  CustomerCentricitySVG,
  MembershipsSVG,
  PackagesSVG,
  BusinessSVG,
  StaffSVG,
  ThemeSVG,
  BlogSVG,
  DomainSVG,
  HomeSVG,
  BookingSVG,
  ClassSVG,
  PricePlanSVG,
  OnlineStoreSVG,
  CustomerSVG,
  TransitionSVG,
  SettingSVG,
  ManageMentSVG,
  PageMangementSVG,
  NavigationSVG,
  PerformanceReportSVG,
  SaleReportSVG,
} from '../../assets/icons/sidebar';
import { MenuItemType } from '../../constants/MenuType';

// constant
const icons = {
  management: {
    module: ManageMentSVG,
    business: BusinessSVG,
    staff: StaffSVG,
  },
  class: {
    module: ClassSVG,
    overview: ListSVG,
    classes: ClassSVG,
    settings: ClassSettingSVG,
  },
  customerCentricity: {
    module: CustomerCentricitySVG,
  },

  pricing: {
    module: PricePlanSVG,
    packages: PackagesSVG,
    memberships: MembershipsSVG,
  },
  onlineStore: {
    module: OnlineStoreSVG,
    theme: ThemeSVG,
    navigation: NavigationSVG,
    blogPost: BlogSVG,
    domains: DomainSVG,
    page: PageMangementSVG,
  },
  reports: {
    saleReport: SaleReportSVG,
    financeReport: PricePlanSVG,
    performanceReport: PerformanceReportSVG,
  },
};

export const Class = {
  id: 'class',
  title: 'Classes',
  type: 'group',
  icon: ClassSVG,
  children: [
    {
      id: 'overview',
      title: 'Overview',
      type: 'item',
      url: '/class/overview',
      icon: icons.class.overview,
      breadcrumbs: false,
    },
    {
      id: 'classes',
      title: 'Classes',
      type: 'item',
      url: '/class/classes',
      icon: icons.class.classes,
      breadcrumbs: false,
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/class/settings',
      icon: icons.class.settings,
      breadcrumbs: false,
    },
  ],
};

export const Pricing = {
  id: 'pc',
  title: 'Pricing Plans',
  type: 'list',
  icon: icons.pricing.module,
  children: [
    {
      id: 'packages',
      title: 'Packages',
      type: 'item',
      url: '/pc/packages',
      icon: icons.pricing.packages,
      breadcrumbs: false,
    },
    {
      id: 'memberships',
      title: 'Memberships',
      type: 'item',
      url: '/pc/memberships',
      icon: icons.pricing.memberships,
      breadcrumbs: false,
    },
  ],
};

export const dashboardList: MenuItemType[] = [
  {
    id: 'dashboard',
    title: 'Home',
    type: 'group',
    icon: HomeSVG,
    url: '/dashboard',
    children: [],
  },
  {
    id: 'schedule',
    title: 'Ticket',
    type: 'group',
    icon: BookingSVG,
    url: '/ticket',
    children: [],
  },
  {
    id: 'media',
    title: 'Media',
    type: 'group',
    icon: PhotographIcon,
    url: '/admin/media',
    children: [],
  },
  {
    id: 'customers',
    title: 'Customers',
    type: 'group',
    icon: CustomerSVG,
    url: '/customers',
    children: [],
  },
  {
    id: 'sales',
    title: 'Sales',
    url: '/sales',
    type: 'group',
    icon: TransitionSVG,
    children: [],
  },
  {
    id: 'setting',
    title: 'Setting',
    type: 'group',
    icon: SettingSVG,
    url: '/setting',
    children: [],
  },
  {
    id: 'user',
    title: 'User',
    type: 'group',
    icon: UserIcon,
    url: '/admin/user',
    children: [],
  },
];
