"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFoundPage() {
  const pathname = usePathname();
  const pathnameParts = pathname.split("/");
  const movieId = pathnameParts[pathnameParts.length - 1];

  return (
    <div className=" text-center">
      <h1 className="text-5xl mb-2">404 Not Found</h1>
      <p className="text-5xl mb-2">
        The movie you are looking for is id{" "}
        <span className="bg-red-600"> {movieId}</span> and no movie was found
        with id <span className="bg-red-600"> {movieId}</span>
      </p>
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
