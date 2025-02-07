"use client";

import { cn } from "@/lib/utils";
import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

const MouseEnterContext = createContext<
    [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
    children,
    className,
    containerClassName,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const { left, top, width, height } =
            containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseEnter = () => {
        setIsMouseEntered(true);
        // No need to check containerRef here if nothing else is done
    };

    const handleMouseLeave = () => {
        if (!containerRef.current) return;
        setIsMouseEntered(false);
        containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };
    return (
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
            <div
                className={cn(
                    "py-20 flex items-center justify-center",
                    containerClassName
                )}
                style={{
                    perspective: "1000px",
                }}
            >
                <div
                    ref={containerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={cn(
                        "flex items-center justify-center relative transition-all duration-200 ease-linear",
                        className
                    )}
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                >
                    {children}
                </div>
            </div>
        </MouseEnterContext.Provider>
    );
};

export const CardBody = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
                className
            )}
        >
            {children}
        </div>
    );
};

type CardItemProps<T extends React.ElementType = "div"> = {
    as?: T;
    children: React.ReactNode;
    className?: string;
    translateX?: number | string;
    translateY?: number | string;
    translateZ?: number | string;
    rotateX?: number | string;
    rotateY?: number | string;
    rotateZ?: number | string;
} & React.ComponentPropsWithoutRef<T>;

export const CardItem = <T extends React.ElementType = "div">({
    as: Tag = "div" as T,
    children,
    className,
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    ...rest
}: CardItemProps<T>) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [isMouseEntered] = useMouseEnter();

    const handleAnimations = React.useCallback(() => {
        if (!ref.current) return;
        const transform = isMouseEntered
            ? `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) 
               rotateX(${rotateX}deg) 
               rotateY(${rotateY}deg) 
               rotateZ(${rotateZ}deg)`
            : `translate3d(0, 0, 0) 
               rotateX(0) 
               rotateY(0) 
               rotateZ(0)`;

        ref.current.style.transform = transform;
    }, [
        isMouseEntered,
        translateX,
        translateY,
        translateZ,
        rotateX,
        rotateY,
        rotateZ,
    ]);

    useEffect(() => {
        handleAnimations();
    }, [isMouseEntered, handleAnimations]);

    return (
        <Tag
            ref={ref}
            className={cn(
                "w-fit transition-transform duration-200 ease-linear",
                className
            )}
            {...rest}
        >
            {children}
        </Tag>
    );
};
// Create a hook to use the context
export const useMouseEnter = () => {
    const context = useContext(MouseEnterContext);
    if (context === undefined) {
        throw new Error(
            "useMouseEnter must be used within a MouseEnterProvider"
        );
    }
    return context;
};
