import React, { Component } from "react";
import Comments from "./Comments";
import { Col, Row, Spinner } from "react-bootstrap";

class Details extends Component {
  state = {
    selectedMovie: {},
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?i=${this.props.match.params.id}&apikey=5660ed2b`
      );
      if (res.ok) {
        const data = await res.json();
        this.setState((state) => {
          return { selectedMovie: data };
        });
      } else {
        console.log("problem");
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const movie = this.state.selectedMovie;
    return Object.keys(movie).length ? (
      <Row
        className='flex-column mb-5 ml-2 align-items-center'
        style={{ height: "80vh" }}>
        <Col md={6}>
          <Row>
            <Col>
              <h2>{movie.Title}</h2>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col md={4}>
              <img src={movie.Poster} alt='' className='img-fluid' />
            </Col>
            <Col>
              <p>{movie.Plot ? movie.Plot : "Sorry, no Plot"}</p>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Comments selectedMovie={movie} />
        </Col>
      </Row>
    ) : (
      <Row
        className='flex-column mb-5 ml-2 align-items-center'
        style={{ height: "80vh" }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Spinner animation='border' variant='light' role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </Col>
      </Row>
    );
  }
}

export default Details;
