import { SiX, SiGithub, SiLinkedin } from "react-icons/si";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function Footer() {
    const getCurrentYear = () => new Date().getFullYear();

    const footerLinks = [
        {
            name: "Twitter",
            link: "https://x.com/Atanu10704224",
            icon: (
                <SiX
                    aria-label="Follow us on Twitter"
                    title="Twitter (External Link)"
                    className="text-2xl cursor-pointer hover:text-purple-500 transition duration-200 ease-in-out"
                />
            ),
        },
        {
            name: "GitHub",
            link: "https://github.com/Atanu0341/algohub",
            icon: (
                <SiGithub
                    aria-label="Follow us on GitHub"
                    title="GitHub (External Link)"
                    className="text-2xl cursor-pointer hover:text-purple-500 transition duration-200 ease-in-out"
                />
            ),
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/atanumajumder0341/",
            icon: (
                <SiLinkedin
                    aria-label="Follow us on LinkedIn"
                    title="LinkedIn (External Link)"
                    className="text-2xl cursor-pointer hover:text-purple-700 transition duration-200 ease-in-out"
                />
            ),
        },
    ];

    return (
        <footer className="w-full border-t">
            <div className="container mx-auto max-w-7xl px-4 lg:px-8 py-8 ">
                <div className="flex flex-col items-center lg:flex-row lg:justify-between space-y-6 lg:space-y-0">
                    {/* Logo with AlgoHub */}
                    <Link href="/" className="flex items-center space-x-2 hover:text-purple-500 transition duration-200 ease-in-out" >
                        <ChevronLeft className="hover:translate-x-1 transition duration-200 ease-in-out" />
                        <span className="text-lg font-semibold">AlgoHub</span>
                        <ChevronRight className="hover:-translate-x-1 transition duration-200 ease-in-out" />
                    </Link>
                    {/* Description */}
                    <p className="text-center lg:text-left lg:max-w-lg">
                        AlgoHub is an open-source DSA platform where you can explore topics, solve practice questions, and contribute optimized solutions in various languages. Enhance your coding skills with our user-friendly layout!          </p>
                    {/* Social Links */}
                    <ul className="flex justify-center gap-4">
                        {footerLinks.map((footerLink) => (
                            <li key={footerLink.link} className="list-none">
                                <Link href={footerLink.link} target="_blank" aria-label={`Link to ${footerLink.name}`}>
                                    {footerLink.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Copyright Section */}
                <div className="mt-12 text-center">
                    <p>&copy; AlgoHub {getCurrentYear()} All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}
