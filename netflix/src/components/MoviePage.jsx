import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import MovieRow from "../components/MovieRow";
import MoviePageHeader from "../components/MoviePageHeader";

class MoviePage extends React.Component {
  render() {
    return (
      <>
        {console.log("SAGAS", this.props.sagas)}
        <Row className="flex-column mb-5">
          {this.props.sagas.length > 0 ? (
            <>
              <Col className="mb-5">
                <MoviePageHeader />
              </Col>
              {this.props.sagas.map((tSaga) => (
                <Col className="mb-5">
                  <MovieRow movieRowSaga={tSaga} />
                </Col>
              ))}
            </>
          ) : (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
        </Row>
      </>
    );
  }
}

export default MoviePage;
