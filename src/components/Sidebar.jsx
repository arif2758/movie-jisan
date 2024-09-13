import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sidebar({ sidebarElement }) {
  return (
    <aside>
     <ul  className="space-y-2">
          <li>
            <Link
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <Image src="/icons/trending.svg" width="24" height="24" alt="" />
              <span>{sidebarElement.trending}</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <Image
                src="/icons/newRelease.svg"
                width="24"
                height="24"
                alt=""
              />
              <span>{sidebarElement.newReleases}</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <Image
                src="/icons/commingSoon.svg"
                width="24"
                height="24"
                alt=""
              />
              <span>{sidebarElement.comingSoon}</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <Image src="/icons/favourite.svg" width="24" height="24" alt="" />
              <span>{sidebarElement.favourites}</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <Image
                src="/icons/watchLater.svg"
                width="24"
                height="24"
                alt=""
              />
              <span>{sidebarElement.watchLater}</span>
            </Link>
          </li>
        </ul>
    </aside>
  );
}
