interface HamburgerProps {
    isMenuActive: boolean,
    closeMenu: () => void
    toggleMenu: () => void
}
interface MenuProps {
    isMenuActive: boolean,
}
interface MaskProps {
    isMenuActive: boolean,
    closeMenu: () => void

}

export type {
    HamburgerProps, MenuProps, MaskProps
}