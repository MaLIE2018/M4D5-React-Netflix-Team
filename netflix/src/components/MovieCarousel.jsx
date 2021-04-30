import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function MovieCarousel(props) {
  const [index, setIndex] = useState(0);
  console.log(props.movies);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const movies = props.movies.search;
  // [{}{}{}]{}{}{}}{}{}] items 10
  let chunks = [];
  let k = 0;
  while (k < movies.length) {
    chunks.push(movies.slice(k, (k += 6)));
  }
  console.log(chunks);
  // [[{}{}{}{}{}{}],[{}{}{}{}]] [items=6,items=4]
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item active>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

// render(<MovieCarousel />);

export default MovieCarousel;
