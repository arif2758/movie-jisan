import { getDictionary } from "@/app/[lang]/dictionaries";

import Image from "next/image";
import { notFound } from "next/navigation";

export default async function MovieDetails({ movieId, lang }) {
  const dictionary = await getDictionary(lang);
  const { moviesList } = dictionary;
  const findMovie = moviesList.find((movie) => movie.id === parseInt(movieId));
  if (!findMovie) {
    notFound();
  }

  return findMovie ? (
    <section>
      <div>
        <Image
          className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
          src={findMovie.backdropPath}
          height={500}
          width={500}
          alt="backdrop path"
        />
      </div>

      <div className="grid grid-cols-12 py-12 gap-8">
        <div className="col-span-2">
          <Image
            src={findMovie.posterPath}
            height={500}
            width={500}
            alt="Post Image"
          />
        </div>
        <div className="col-span-8">
          <h2 className="font-bold text-slate-300 text-2xl">
            {findMovie.originalTitle}
          </h2>
          <p className="my-2 text-slate-400 italic">{findMovie.overview}</p>
          <ul className="text-slate-300 space-y-2 my-8">
            <li>Release Date :{findMovie.releaseDate} </li>
            <li>Average Vote : {findMovie.voteAverage}</li>
            <li>Vote Count : {findMovie.voteCount}</li>
            <li>Popularity : {findMovie.popularity}</li>
          </ul>
        </div>
        <div className="col-span-2 space-y-4">
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            Stream In HD
          </button>
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            Download In HD
          </button>
        </div>
      </div>
    </section>
  ) : (
    <p className="text-center"> The movie you want is not available </p>
  );
}
