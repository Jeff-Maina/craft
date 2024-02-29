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
  {
    gif: "nextbank_navmenu.png",
    pageLink: `${link}navmenu_002`,
    draft: false,
  },
  {
    gif: "plantica_navmenu.png",
    pageLink: `${link}navmenu_003`,
    draft: false,
  },
];

export const FinishedNavMenus = NavMenusList.filter(
  (menu) => menu.draft === false
);

export const NavmenuCount = FinishedNavMenus.length;
