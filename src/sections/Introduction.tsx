"use client";

import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    {
        /*
        esto permite ver el valor de 0-1, 1 siendo que ya terminó de hacer el scroll en la sección
        useMotionValueEvent(scrollYProgress, "change", (latest) =>
       // console.log(latest)
   // );*/
    }

    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    }, [wordIndex]);

    return (
        <section className="py-20">
            <div className="container">
                <div className="sticky top-40 md:top-32 lg:top-">
                    <div className="flex justify-center">
                        <Tag>Introducing Layers</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl text-center font-medium mt-10">
                        <span>Your creative process deserves better.</span>{" "}
                        <span className="text-white/15">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className={twMerge(
                                        "transition duration-500 text-white/10",
                                        wordIndex < currentWord &&
                                            "text-white/80"
                                    )}
                                >
                                    {word}{" "}
                                </span>
                            ))}
                        </span>
                        <span className="text-lime-400 block">
                            That&apos;s why we built Layers.
                        </span>
                    </div>
                </div>
                <div
                    ref={scrollTarget}
                    className="h-[160vh] lg:h-[130vh]"
                ></div>
            </div>
        </section>
    );
}
