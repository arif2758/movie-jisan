import "server-only";

export const getMovies = async () =>
  import("./movieList/movies.json").then((module) => module.default);
