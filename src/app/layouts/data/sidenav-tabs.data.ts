import { SidenavTab } from '@layouts/interfaces';
import { MainRoutesEnum } from '@pages/main/enums';

export const SIDENAV_TABS: SidenavTab<MainRoutesEnum>[] = [
  {
    label: 'Home',
    route: MainRoutesEnum.Home,
    icon: 'home'
  },
  {
    label: 'Matching',
    route: MainRoutesEnum.Matching,
    icon: 'message'
  },
  {
    label: 'Messages',
    route: MainRoutesEnum.Messages,
    icon: 'message'
  },
  {
    label: 'Messages',
    route: MainRoutesEnum.Messages,
    icon: 'message'
  }
];
