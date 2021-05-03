import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/css/App.css";
import NavbarNetflix from "./components/NavbarNetflix";
import { Container, Alert, Row, Col } from "react-bootstrap";
import React from "react";
import MoviePage from "./components/MoviePage";
import NetflixFooter from "./components/NetflixFooter";
import Comments from "./components/Comments";

class App extends React.Component {
  state = {
    queryArr: ["Harry Potter", "Lord of the Rings", "Terminator"],
    history:[],
    data: [],
    searchText: "",
    error: {
      mes: "",
      isError: false,
    },
    showComments: false,
    selectedMovie: {}
    
  };

  handleShowCommentsClick = (showComments, selectedMovie) => {
    this.setState({ showComments: showComments, selectedMovie: selectedMovie });
  };
  // Search field 
  handleSearchTextChange = (searchText) => {
    this.setState({
      searchText: searchText,
      queryArr: searchText.length>=3?[searchText]:["Harry Potter", "Lord of the Rings", "Terminator"]
    });
  };

  fetchData = async () => {
    this.setState({data:await Promise.all(
      this.state.queryArr.map(async(query) => {
          const res = await fetch(
            `http://www.omdbapi.com/?s=${query}&apikey=5660ed2b`,
            {
              method: "GET",
              header: {
                ContentType: "application/json",
              },
            }
            );
            return await res.json();
        })
        ).catch ((err) =>{
          this.setState({
            error: {
              mes: err.message,
              isError: true,
            },
          });
        })
      })
  }

  componentDidUpdate(prevProps,prevState) {
      if(this.state.searchText.length === 0  && prevState.searchText.length !== 0) this.fetchData()
      if(this.state.searchText.length > 0 && prevState.searchText !== this.state.searchText){
          this.fetchData() 
      }
  }
  componentDidMount() {
    this.fetchData()
  }

render() {
    return (
      <>
        <Container fluid>
          <NavbarNetflix
            onSearchTextChange={this.handleSearchTextChange}
            searchText={this.state.searchText}
          />
          {this.state.error.isError ? (
            <Row>
              <Col>
                <Alert variant='danger' className='mx-4'>
                  {this.state.error.mes}
                </Alert>
              </Col>
            </Row>
          ) :
            <MoviePage
              data={this.state.data}
              searchText={this.state.searchText}
              movieRowTitles={this.state.queryArr}
              onShowCommentsClick={this.handleShowCommentsClick}
            />
          }
        </Container>
        {this.state.showComments ? (
          <Comments
            selectedMovie={this.state.selectedMovie}
            onShowCommentsClick={this.handleShowCommentsClick}
          />
        ) : (
          <></>
        )}
        <NetflixFooter />
      </>
    );
  }
}

export default App;
