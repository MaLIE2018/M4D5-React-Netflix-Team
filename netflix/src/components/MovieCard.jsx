import { Card, Spinner } from "react-bootstrap";
import React from "react";

class MovieCard extends React.Component {
  state = {
    isLoaded: false,
  };

  handleImageLoaded() {
    this.setState({ isLoaded: true });
  }

  handleClickShowComments = () => {
    this.props.onShowCommentsClick(true, this.props.movie);
  };

  render() {
    return this.state.isLoaded ? (
      <Card style={{ border: "none", backgroundColor: "transparent" }}>
        <Card.Img
          onClick={this.handleClickShowComments}
          variant='top'
          src={this.props.movie.Poster}
          style={{ width: 150 }}
          onLoad={this.handleImageLoaded.bind(this)}
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
