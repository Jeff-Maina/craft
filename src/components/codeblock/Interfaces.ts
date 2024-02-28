type tabProps = {
    javascript: string;
    typescript: string;
    label: string;
};

type dependency = {
    label: string;
    command: string;
}

type modalProps = {
    isModalActive: boolean;
    tabs: Array<tabProps>;
    setModalActive: (value: boolean) => void;
    dependencies?: Array<dependency>;
};

interface ModalProps {
    modalProps: modalProps;
}

interface CodeboxProps {
    tabs: Array<tabProps>;
    closeModal: () => void

}

interface MaskProps {
    closeModal: () => void
}


// dependencies
type dependencyType = {
    label: string;
    command: string;
};

interface dependecyObj {
    dependency: dependencyType;
}

interface dependeciesProps {
    dependencies?: Array<dependencyType>;
}


export type {
    ModalProps,
    CodeboxProps,
    MaskProps,
    dependecyObj, dependeciesProps, tabProps
}