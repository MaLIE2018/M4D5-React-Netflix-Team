import MovieCarousel from "../components/MovieCarousel";
import { sortByYear } from "../lib/helper";
const MovieRow = (props) => {
  return (
    <>
      <h3 className='pt-2'>{props.movieRowTitle}</h3>
      <MovieCarousel
        carouselSaga={props.movieRowSaga}
        onShowCommentsClick={props.onShowCommentsClick}
      />
    </>
  );
};

export default MovieRow;
