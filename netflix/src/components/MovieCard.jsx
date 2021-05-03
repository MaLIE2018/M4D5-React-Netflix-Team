import { Card, Spinner } from "react-bootstrap";
import React from "react";

class MovieCard extends React.Component {
  handleClickShowComments = () => {
    this.props.onShowCommentsClick(true, this.props.movie);
  };

  render() {
    return !this.props.isLoading ? (
      <Card style={{ border: "none", backgroundColor: "transparent" }}>
        <Card.Img
          onClick={this.handleClickShowComments}
          variant='top'
          src={this.props.movie.Poster}
          style={{ width: 150 }}
        />
      </Card>
    ) : (
      <Spinner animation='border' variant='light' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    );
  }
}

export default MovieCard;
