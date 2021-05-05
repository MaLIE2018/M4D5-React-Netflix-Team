import MoviePageHeader from "../components/MoviePageHeader";
import { Row, Col } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import { sortByYear } from "../lib/helper";
import React, { useState } from "react";

const SearchResults = (props) => {
  const [failedImages, addFailedImage] = useState([]);

  const handleFailedImage = (failedImage) => {
    addFailedImage(() => [...failedImages, failedImage]);
  };

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
                if (!failedImages.includes(movie.imdbID)) {
                  return (
                    <Col xs={12} md={2} className='mb-4'>
                      <MovieCard
                        onFailedImage={handleFailedImage}
                        movie={movie}
                        key={movie.imdbID}
                        keyValue={movie.imdbID}
                        onShowCommentsClick={props.onShowCommentsClick}
                      />
                    </Col>
                  );
                }
              })}
            </Row>
          </Col>
        </>
      </Row>
    </>
  );
};

export default SearchResults;
