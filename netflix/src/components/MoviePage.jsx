import React from "react";
import { Row, Col } from "react-bootstrap";
import MovieRow from "../components/MovieRow";
import MoviePageHeader from "../components/MoviePageHeader";

class MoviePage extends React.Component {
  render() {
    return (
      <Row className='flex-column'>
        <Col>
          <MoviePageHeader />
        </Col>
        <Col>
          <MovieRow />
        </Col>
      </Row>
    );
  }
}

export default MoviePage;
