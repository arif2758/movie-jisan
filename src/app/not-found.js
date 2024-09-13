"use client";
import Link from "next/link";
import { useState } from "react";

export default function NotFoundPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search query submission (e.g., redirect to search page)
  };

  return (
    <div className=" text-center">
      <h1 className="text-5xl mb-2">404 Not Found</h1>
      <p className="text-5xl mb-2">
        The page you are looking for could not be found.
      </p>
      <form onSubmit={handleSearchSubmit} className="mb-2 p-2">
        <input
          type="text"
          placeholder="Search our website..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-md ml-2 p-2"
        />
        <button type="submit" className="p-2">
          Search
        </button>
      </form>
      <div className="mt-2">
        <Link
          href="/"
          className="bg-primary rounded-lg py-2 px-5 gap-2 text-[#171923] font-semibold text-sm mt-4"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
