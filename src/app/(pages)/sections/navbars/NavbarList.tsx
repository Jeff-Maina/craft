import Navbar001 from "./(examples)/navbar_001/navbar_001";
import Navbar002 from "./(examples)/navbar_002/navbar_002";

type Navbar = { component: JSX.Element; draft: boolean };

export const NavbarList: Array<Navbar> = [
  { component: <Navbar001 />, draft: false },
  {
    component: <Navbar002 />,
    draft: false,
  },
];

export const FinishedNavbars = NavbarList.filter(
  (navbar) => navbar.draft === false
);

export const NavbarCount = FinishedNavbars.length;
