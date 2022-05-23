import { ReactNode } from 'react';
import * as icons from './icons';

export interface NavigationLink {
  href: string;
  caption: string;
  active?: boolean;
  iconSvg?: ReactNode;
}

const sidebarMenuItems: NavigationLink[] = [
  {
    href: '/dashboard',
    caption: 'Dashboard',
    iconSvg: icons.dashboardSvg
  },
  {
    href: '/cobrands',
    caption: 'Cobrands',
    iconSvg: icons.cobrandsSvg
  },
  {
    href: '/merchants',
    caption: 'Merchants',
    iconSvg: icons.merchantsSvg
  },
  {
    href: '/reports',
    caption: 'Reports',
    iconSvg: icons.reportsSvg
  },
  {
    href: '/messages',
    caption: 'Messages',
    iconSvg: icons.messagesSvg
  },
  {
    href: '/settings',
    caption: 'Settings',
    iconSvg: icons.settingsSvg
  }
];

export { sidebarMenuItems };
