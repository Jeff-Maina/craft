// ts types;
type tabProps = {
    javascript: string;
    typescript: string;
    label: string;
    dateCreated: string;
};

type dependency = {
    label: string;
    command: string;
}

interface ButtonProps {
    children: JSX.Element;
    tabs: Array<tabProps>;
    className?: string;
    dependencies: Array<dependency>;
}

export type {
    ButtonProps
}