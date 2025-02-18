"use client";

import React from "react";
import { type IntegrationsType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

export default function IntegrationColumn(props: {
    integrations: IntegrationsType;
    className?: string;
    reverse?: boolean;
}) {
    const { integrations, className, reverse } = props;
    return (
        <motion.div
            initial={{ y: reverse ? "-50%" : 0 }}
            animate={{ y: reverse ? 0 : "-50%" }}
            transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
            }}
            className="flex flex-col gap-4 pb-4 "
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                    {integrations.map((ints) => (
                        <div
                            key={ints.name}
                            className={twMerge(
                                "bg-neutral-900 border border-white/10 rounded-3xl p-6",
                                className
                            )}
                        >
                            <div className="flex justify-center items-center">
                                <Image
                                    src={ints.icon}
                                    key={ints.name}
                                    alt={ints.name}
                                    className="size-24"
                                />
                            </div>
                            <h3 className="text-3xl text-center mt-6">
                                {ints.name}
                            </h3>
                            <p className="text-center text-white/50 mt-2">
                                {ints.description}
                            </p>
                        </div>
                    ))}
                </Fragment>
            ))}
        </motion.div>
    );
}
