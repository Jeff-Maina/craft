interface ButtonProps {
    isMenuActive: boolean;
    toggleMenu: () => void;
}
interface MaskProps {
    isMenuActive: boolean;
    closeMenu: () => void;
}

export type {
    ButtonProps, MaskProps
}