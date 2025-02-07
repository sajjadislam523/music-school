"use client";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

interface WavyBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    colors?: string[];
    waveWidth?: number;
    backgroundFill?: string;
    blur?: number;
    speed?: "slow" | "fast";
    waveOpacity?: number;
}

export const WavyBackground = ({
    children,
    className,
    containerClassName,
    colors,
    waveWidth,
    backgroundFill,
    blur = 10,
    speed = "fast",
    waveOpacity = 0.5,
    ...props
}: WavyBackgroundProps) => {
    const noise = createNoise3D();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationIdRef = useRef<number>(null);
    const getSpeed = useCallback(() => {
        switch (speed) {
            case "slow":
                return 0.001;
            case "fast":
                return 0.002;
            default:
                return 0.001;
        }
    }, [speed]);

    const waveColors = colors ?? [
        "#38bdf8",
        "#818cf8",
        "#c084fc",
        "#e879f9",
        "#22d3ee",
    ];

    const drawWave = useCallback(
        (ctx: CanvasRenderingContext2D, nt: number) => {
            const newNt = nt + getSpeed();
            const w = ctx.canvas.width;
            const h = ctx.canvas.height;
            for (let i = 0; i < 5; i++) {
                ctx.beginPath();
                ctx.lineWidth = waveWidth || 50;
                ctx.strokeStyle = waveColors[i % waveColors.length];
                for (let x = 0; x < w; x += 5) {
                    const y = noise(x / 800, 0.3 * i, newNt) * 100;
                    ctx.lineTo(x, y + h * 0.5);
                }
                ctx.stroke();
                ctx.closePath();
            }
            return newNt;
        },
        [getSpeed, noise, waveColors, waveWidth]
    );

    const init = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let nt = 0;
        // const frameCount = 0;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.filter = `blur(${blur}px)`;
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        const render = () => {
            ctx.fillStyle = backgroundFill || "black";
            ctx.globalAlpha = waveOpacity;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            nt = drawWave(ctx, nt);
            animationIdRef.current = requestAnimationFrame(render);
        };

        animationIdRef.current = requestAnimationFrame(render);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
        };
    }, [backgroundFill, blur, drawWave, waveOpacity]);

    useEffect(() => {
        const cleanup = init();
        return () => {
            cleanup?.();
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
        };
    }, [init]);

    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(
            typeof window !== "undefined" &&
                navigator.userAgent.includes("Safari") &&
                !navigator.userAgent.includes("Chrome")
        );
    }, []);

    return (
        <div
            className={cn(
                "h-screen flex flex-col items-center justify-center",
                containerClassName
            )}
        >
            <canvas
                className="absolute inset-0 z-0"
                ref={canvasRef}
                id="canvas"
                style={{
                    ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
                }}
            ></canvas>
            <div className={cn("relative z-10", className)} {...props}>
                {children}
            </div>
        </div>
    );
};
