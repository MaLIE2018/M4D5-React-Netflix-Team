import MovieCarousel from "../components/MovieCarousel";

const MovieRow = (props) => {
  return (
    <>
      <h3>{props.movieRowSaga.Search[0].Title.split(":"[0])}</h3>
      <MovieCarousel carouselSaga={props.movieRowSaga} />
    </>
  );
};

export default MovieRow;
