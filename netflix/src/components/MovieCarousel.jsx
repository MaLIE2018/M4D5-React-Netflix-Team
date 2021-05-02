import React, { useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import "../styles/css/Carousel.css";

function MovieCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const chunkMovies = () => {
    const movies = props.carouselSaga.Search;

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
                <Col md={2} key={movie.imdbID}>
                  <img src={movie.Poster} alt='' style={{ width: 150 }} />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

// render(<MovieCarousel />);

export default MovieCarousel;
