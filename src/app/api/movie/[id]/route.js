import { movieList } from "@/lib/data";
import { NextResponse } from "next/server";

// GET a Single movie
export async function GET(_request, context) {
  const { params } = context;
  const movieId = params.id;
  const data = await movieList;
  const allMovies = data.results;
  const movie = allMovies.find((movie) => movie.id === parseInt(movieId));
  if (!movie) {
    return NextResponse.json(
      { success: false, message: "Movie not found" },
      { status: 404 }
    );
  }
  return NextResponse.json(movie, { status: 200 });
}

// DELETE Method

export async function DELETE(_request, context) {
  const { params } = context;
  const movieId = params.id;  // paramsID
  const data = await movieList;
  const allMovies = data.results; // allMovies arry

  const movieIndex = allMovies.findIndex(
    (movie) => movie.id === parseInt(movieId)
  );
  if (movieIndex === -1) {
    return NextResponse.json(
      { success: false, message: "Movie not found" },
      { status: 404 }
    );
  }

  const movieToDelete = allMovies[movieIndex];
  allMovies.splice(movieIndex, 1);

  return NextResponse.json(
    { message: "movie is deleted" },
    { movieToDelete },
    {
      status: 200,
    }
  );
}

// PATCH Methos for Specific field updates, Partial updates

export async function PATCH(request, context) {
  const { title } = await request.json();
  const { params } = context;
  const movieId = params.id;

  if (!title) {
    return NextResponse.json(
      { success: false, message: "Missing title in request body" },
      { status: 400 }
    );
  }
  const data = await movieList;
  const allMovies = data.results;
  const movieIndex = allMovies.findIndex(
    (movie) => movie.id === parseInt(movieId)
  );
  if (movieIndex === -1) {
    return NextResponse.json(
      { success: false, message: "Movie not found" },
      { status: 404 }
    );
  }

  allMovies[movieIndex].title = title;

  // Optionally include updated movie data in response
  const updatedMovie = allMovies[movieIndex];
  return NextResponse.json({ success: true, movie: updatedMovie });
}
