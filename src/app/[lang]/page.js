import { getDictionary } from "./dictionaries";

import Sidebar from "@/components/Sidebar";
import MovieCard from "@/components/MovieCard";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  const { moviesList, btnDetails } = dictionary;

  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        {/*Sidebar */}
        <Sidebar sidebarElement={dictionary} />

        {/*Content */} 
        <div className="content">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
            {
            
            moviesList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} btnDetails={btnDetails} />
            ))
            
             
            }
          </div>
        </div>
      </div>
    </main>
  );
}


