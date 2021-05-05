import { Card, Spinner } from "react-bootstrap";
import React from "react";
import { withRouter } from "react-router";

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
    return (
      <>
        <Card style={{ border: "none", backgroundColor: "transparent" }}>
          <Card.Img
            onClick={() =>
              this.props.history.push(`/Details/${this.props.keyValue}`)
            }
            variant='top'
            src={this.props.movie.Poster}
            style={{ width: 150 }}
            onLoad={this.handleImageLoaded.bind(this)}
            onError={() => this.props.onFailedImage(this.props.keyValue)}
          />
          {!this.state.isLoaded ? (
            <Spinner animation='border' variant='light' role='status'>
              <span className='sr-only'>Loading...</span>
            </Spinner>
          ) : null}
        </Card>
      </>
    );
  }
}

export default withRouter(MovieCard);
