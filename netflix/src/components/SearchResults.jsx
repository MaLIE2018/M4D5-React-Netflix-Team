import MoviePageHeader from "../components/MoviePageHeader";
import { Row, Col, Spinner } from "react-bootstrap";

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
                {props.results.Search.map((movie) => {
                  return (
                    <Col xs={12} md={2} key={movie.imdbID} className='mb-5'>
                      <img src={movie.Poster} alt='' style={{ width: 150 }} />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          ) : (
            <Col className='mb-5'>
              <Spinner animation='border' role='status'>
                <span className='sr-only'>Loading...</span>
              </Spinner>
            </Col>
          )}
        </>
      </Row>
    </>
  );
};

export default SearchResults;
