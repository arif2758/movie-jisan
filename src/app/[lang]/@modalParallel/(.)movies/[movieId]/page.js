import Modal from "@/components/Modal";
import MovieDetails from "@/components/MovieDetails";

export default function MovieDetailsPage({ params: { movieId, lang } }) {
  return (
    <Modal>
      <MovieDetails movieId={movieId} lang={lang} />
    </Modal>
  );
}
