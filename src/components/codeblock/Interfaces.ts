type codeBlock = {
    javascript: string;
    typescript: string;
};

type modalProps = {
    isModalActive: boolean;
    codeBlock: codeBlock;
    setModalActive: (value: boolean) => void;
};

interface ModalProps {
    modalProps: modalProps;
}

export type {
    ModalProps,
}