import { movieList } from "@/lib/data";
import { NextResponse } from "next/server";

// GET Method
export async function GET() {
  try {
    // Retrieve all movies from the database
    const data = await movieList;
    const allMovies = data.results;

    // Return a successful JSON response with additional data
    return NextResponse.json(
      {
        success: true,
        movies: allMovies,
        totalMovies: allMovies.length, // Example metadata
      },
      {
        status: 200, // HTTP status code
      }
    );
  } catch (error) {
    console.error(error);

    // Return an error response with appropriate status code
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve movies",
      },
      {
        status: 500,
      }
    );
  }
}
