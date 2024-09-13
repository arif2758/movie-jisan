import Image from "next/image";

import React from "react";
import RatingImage from "./RatingImage";
import Link from "next/link";

export default function MovieCard({ movie, btnDetails }) {
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <Image
        className="w-full object-cover rounded-md"
        src={movie.posterPath}
        height={1000}
        width={500}
        alt="thumbnail"
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">
          {movie.title.length > 25
            ? `${movie.title.slice(0, 25)}...`
            : movie.title}
        </h3>

        <p className="text-[#575A6E] text-sm mb-2">{movie.tag}</p>
        <div className="flex items-center space-x-1 mb-5">
          <RatingImage />
          <RatingImage />
          <RatingImage />
          <RatingImage />
          <RatingImage />
        </div>
        <Link
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href={`/movies/${movie.id}`}
        >
          <Image src="/tag.svg" width="18" height="18" alt="" />
          <span>{btnDetails}</span>
        </Link>
      </figcaption>
    </figure>
  );
}
