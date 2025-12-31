"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0,
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "#0a101f", // card dark
        "#050709", // background
        "#0d1424", // input color
        "#172554", // secondary
    ];

    const linearGradients = [
        "linear-gradient(to bottom right, #2b7fff, #172554)", // primary to secondary
        "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
        "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
        "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(
        linearGradients[0],
    );

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className="relative flex h-[30rem] justify-between space-x-10 overflow-y-auto rounded-[20px] p-10 border border-secondary"
            ref={ref}
        >
            <div className="relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-16 first:mt-0">
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-2xl font-bold text-white"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-base mt-4 max-w-sm text-gray-400"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-32" />
                </div>
            </div>
            <div
                style={{ background: backgroundGradient }}
                className={cn(
                    "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-2xl lg:block",
                    contentClassName,
                )}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};
