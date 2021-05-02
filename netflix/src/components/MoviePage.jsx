import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import MovieRow from "../components/MovieRow";
import MoviePageHeader from "../components/MoviePageHeader";

class MoviePage extends React.Component {
  render() {
    return (
      <>
        <Row className='flex-column mb-5 ml-2'>
          {this.props.sagas.length > 0 ? (
            <>
              <Col className='mb-5'>
                <MoviePageHeader
                  moviePageHeadline={this.props.moviePageHeadline}
                />
              </Col>
              {this.props.sagas.map((saga, i) => (
                <Col className='mb-5' key={i}>
                  <MovieRow
                    movieRowSaga={saga}
                    key={i}
                    movieRowTitle={this.props.movieRowTitles[i]}
                    onShowCommentsClick={this.props.onShowCommentsClick}
                  />
                </Col>
              ))}
            </>
          ) : (
            <Col className='mb-5'>
              <Spinner animation='border' role='status'>
                <span className='sr-only'>Loading...</span>
              </Spinner>
            </Col>
          )}
        </Row>
      </>
    );
  }
}

export default MoviePage;
