import { FC } from "react";

interface NavProps {
    isMenuActive: boolean;
    setMenuActive: Function;
}

const NavMenu: FC<NavProps> = ({ isMenuActive, setMenuActive }) => {
    return (<section></section>);
}

export default NavMenu;