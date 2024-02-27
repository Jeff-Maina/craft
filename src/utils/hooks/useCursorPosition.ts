import { useState, RefObject, useEffect } from "react";

export function useCursorPosition(ref: RefObject<HTMLElement>) {
    const [point, setPoint] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (!ref.current) return;
        const element = ref.current!;
        const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
            const { top, left } = element.getBoundingClientRect()
            const x = clientX - left;
            const y = clientY - top;
            setPoint({ x, y });
        };

        element.addEventListener("pointermove", handlePointerMove);

        return () => element.removeEventListener("pointermove", handlePointerMove);
    }, []);

    return point;
}
