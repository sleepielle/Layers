"use client";

import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
    { label: "Home", href: "home" },
    { label: "Features", href: "features" },
    { label: "Integrations", href: "integrations" },
    { label: "FAQs", href: "faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50 ">
                <div className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full  bg-neutral-950/70 backdrop-blur-sm ">
                        <div className="grid grid-cols-2 lg:grid-cols-3   p-2 px-4 md:pr-2 items-center">
                            <div>
                                <Image
                                    src={logoImage}
                                    alt="logo"
                                    className="h-9 w-auto md:h-auto"
                                />
                            </div>
                            <div className="lg:flex items-center justify-center hidden">
                                <nav className="flex gap-6 font-medium ">
                                    {navLinks.map((link) => (
                                        <Link
                                            href={`#${link.href}`}
                                            key={link.label}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document
                                                    .getElementById(link.href)
                                                    ?.scrollIntoView({
                                                        behavior: "smooth",
                                                    });
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu md:hidden "
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "rotate-45 -translate-y-1"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            "transition",
                                            isOpen && "opacity-0"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "-rotate-45 translate-y-1"
                                        )}
                                    ></line>
                                </svg>

                                <Button
                                    variant="secondary"
                                    className="md:inline-flex items-center hidden"
                                >
                                    Log In
                                </Button>
                                <Button
                                    variant="primary"
                                    className="md:inline-flex items-center hidden"
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </div>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.label}
                                                href={`#${link.href}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    document
                                                        .getElementById(
                                                            link.href
                                                        )
                                                        ?.scrollIntoView({
                                                            behavior: "smooth",
                                                        });
                                                    setIsOpen(false);
                                                }}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                        <Button variant="secondary">
                                            Log In
                                        </Button>
                                        <Button variant="primary">
                                            Sign Up
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
        </>
    );
}
