import React, { useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import "../styles/css/Carousel.css";
import MovieCard from "../components/MovieCard";
import { sortByYear } from "../lib/helper";
function MovieCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const chunkMovies = () => {
    const movies = sortByYear(props.carouselSaga.Search);

    let chunks = [];
    let i = 0;
    while (i < movies.length) {
      chunks.push(movies.slice(i, (i += 6)));
    }
    return chunks;
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='mt-3'>
      {chunkMovies().map((chunk) => {
        return (
          <Carousel.Item>
            <Row className='flex-row'>
              {chunk.map((movie) => (
                <Col md={2}>
                  <MovieCard
                    movie={movie}
                    key={movie.imdbID}
                    onShowCommentsClick={props.onShowCommentsClick}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default MovieCarousel;
