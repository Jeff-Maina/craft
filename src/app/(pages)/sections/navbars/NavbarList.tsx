import Navbar001 from "./(examples)/navbar_001/navbar_001";

type Navbar = { component: JSX.Element; draft: boolean };

export const NavbarList: Array<Navbar> = [
  { component: <Navbar001 />, draft: false },
];

export const FinishedNavbars = NavbarList.filter((navbar) => navbar.draft === false);

export const NavbarCount = NavbarList.length;
