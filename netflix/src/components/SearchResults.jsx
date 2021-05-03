import MoviePageHeader from "../components/MoviePageHeader";
import { Row, Col } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import { sortByYear } from "../lib/helper";

const SearchResults = (props) => {
  return (
    <>
      <Row className='flex-column mb-5 ml-2'>
        <>
          <Col className='mb-5'>
            <MoviePageHeader moviePageHeadline={props.moviePageHeadline} />
          </Col>
          <Col className='mb-5'>
            <Row>
              {sortByYear(props.data[0].Search).map((movie) => {
                return (
                  <Col xs={12} md={2} className='mb-4'>
                    <MovieCard
                      isLoading={props.isLoading}
                      movie={movie}
                      key={movie.imdbID}
                      onShowCommentsClick={props.onShowCommentsClick}
                    />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </>
      </Row>
    </>
  );
};

export default SearchResults;
