"use client"

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useSearch } from "@/context/SearchContext";
import React from "react";

function SearchMobile() {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <div className="p-4 w-full md:hidden">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-8"
          placeholder="Search topics or questions..."
        />
      </div>
    </div>
  );
}

export default SearchMobile;