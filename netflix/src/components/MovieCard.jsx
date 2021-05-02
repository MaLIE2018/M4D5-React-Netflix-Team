import { Card } from "react-bootstrap";
import React from "react";

class MovieCard extends React.Component {
  handleClickShowComments = () => {
    this.props.onShowCommentsClick(true, this.props.movie);
  };

  render() {
    return (
      <Card style={{ border: "none", backgroundColor: "transparent" }}>
        <Card.Img
          onClick={this.handleClickShowComments}
          variant='top'
          src={this.props.movie.Poster}
          style={{ width: 150 }}
        />
      </Card>
    );
  }
}

export default MovieCard;
