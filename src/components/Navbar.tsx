'use client'

import { ThemeToggle } from "./ThemeToggle";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Input } from "./ui/input";
import { useSearch } from "@/context/SearchContext";
import Link from "next/link";
import React from "react";

function Navbar() {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur border-b bg-background/80 transition-colors duration-300">
      <nav className="max-w-7xl container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 hover:text-purple-500 transition duration-200 ease-in-out transform hover:scale-105">
          <ChevronLeft className="hover:translate-x-1 transition duration-200 ease-in-out" />
          <span className="text-lg font-semibold transform hover:scale-105 transition duration-200 ease-in-out">AlgoHub</span>
          <ChevronRight className="hover:-translate-x-1 transition duration-200 ease-in-out" />
        </Link>
        <div className="hidden md:block w-3/6">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground transition-transform duration-200 ease-in-out transform hover:scale-125" />
            <Input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-8 transition-all duration-200 ease-in-out focus:outline-none focus:ring focus:ring-purple-300" placeholder="Search topics or questions..."
            />
          </div>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}

export default Navbar;
