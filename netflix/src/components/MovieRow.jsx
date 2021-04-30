import MovieRowTitle from '../components/MovieRowTitle';
import MovieCarousel from '../components/MovieCarousel';
import HarryFilms from '../data/harrypotter.json';

const MovieRow = (props) => {
  return (
    <>
      <MovieRowTitle />
      <MovieCarousel movies={HarryFilms} />
    </>
  );
};

export default MovieRow;
