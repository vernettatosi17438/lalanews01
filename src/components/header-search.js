"use client";

import { useRouter } from "next/navigation";
import React from "react";

function HeaderSearch() {
  const router = useRouter()

  const onSubmit = (e) => {
    e.preventDefault();
    const q = e.target.q.value;

    window.location.href = `/search/${q}`
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="relative">
        <input
          className="bg-gray-100 pl-4 pr-10 py-2 rounded-full outline-none w-[240px]"
          placeholder="Search..."
          name="q"
          required
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20px"
          height="20px"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M338.29 338.29L448 448"
          />
        </svg>
      </div>
    </form>
  );
}

HeaderSearch.propTypes = {};

export default HeaderSearch;
