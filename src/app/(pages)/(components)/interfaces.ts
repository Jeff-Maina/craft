interface dropdownprops {
    isDropDownActive: boolean;
    closeDropDown: () => void;
    data: data[];
    category: string;
}

type data = {
    component_name: string;
    component_count: number;
    component_path: string;
};

interface headerProps {
    data: Array<data>;
    category: string;
}

export type {
    headerProps, dropdownprops
}