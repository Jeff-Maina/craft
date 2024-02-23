type navMenu = {
  gif: String;
  pageLink: string;
  draft: boolean;
};

const link = "/sections/navmenus/";

export const NavMenusList: Array<navMenu> = [
  {
    gif: "",
    pageLink: `${link}navmenu_001`,
    draft: true,
  },
];

export const FinishedNavMenus = NavMenusList.filter(
  (menu) => menu.draft === false
);

export const NavmenuCount = NavMenusList.length;
