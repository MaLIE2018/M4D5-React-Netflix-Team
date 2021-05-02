import MovieCarousel from "../components/MovieCarousel";

const MovieRow = (props) => {
  return (
    <>
      <h3 className='pt-2'>{props.movieRowTitle}</h3>
      <MovieCarousel carouselSaga={props.movieRowSaga} />
    </>
  );
};

export default MovieRow;
