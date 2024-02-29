interface ButtonProps {
    isMenuActive: boolean;
    toggleMenu: () => void;
    openMenu: () => void
}
interface MenuProps {
    isMenuActive: boolean;
    closeMenu: () => void;
}



export type {
    ButtonProps, MenuProps
}