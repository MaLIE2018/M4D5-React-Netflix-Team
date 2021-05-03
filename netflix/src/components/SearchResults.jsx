import MoviePageHeader from "../components/MoviePageHeader";
import { Row, Col, Spinner } from "react-bootstrap";
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
          {props.results.Search !== undefined &&
          props.results.Search.length > 0 ? (
            <Col className='mb-5'>
              <Row>
                {sortByYear(props.results.Search).map((movie) => {
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
          ) : props.results.Error === undefined ? (
            <Col className='mb-5'>
              <Spinner animation='border' role='status'>
                <span className='sr-only'>Loading...</span>
              </Spinner>
            </Col>
          ) : (
            <Col className='mb-5'>{props.results.Error}</Col>
          )}
        </>
      </Row>
    </>
  );
};

export default SearchResults;
