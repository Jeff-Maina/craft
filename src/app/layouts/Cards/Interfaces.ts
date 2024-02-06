interface ComponentProps {
    pagePath: string;
    componentName: string;
    componentCount: number;
    children: JSX.Element;
    className?: React.ComponentProps<"div">["className"];
    isSection: boolean;
}

export type {
    ComponentProps
}