export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  scroll?: boolean;
  submenu?: Menu[];
};
