import "bootstrap/dist/css/bootstrap.min.css";
import './styles/css/App.css';
import NavbarNetflix from './components/NavbarNetflix';
import { Container, Alert, Row,Col } from 'react-bootstrap';
import React from 'react';
import MoviePage from './components/MoviePage';
import NetflixFooter from './components/NetflixFooter';
import SearchResults from './components/SearchResults';
import Comments from './components/Comments';

class App extends React.Component {
  state = {
    searchArr: ["Harry Potter", "Lord of the Rings", "Terminator" ],
    data: [],
    query: "",
    error:{
      mes: "",
      isError: false,
    },
    showComments:false,
    selectedMovie: {}
  };

  handleShowCommentsClick = (showComments, selectedMovie) => {
    this.setState({showComments: showComments, selectedMovie: selectedMovie})
  }

  handleSearchTextChange = (searchText) => {
      this.setState({query: searchText, data: searchText==="" ? this.componentWillMount():this.getSearchResults(searchText)});
  }

  async componentWillMount () {
    try {
      this.setState({data: await Promise.all(
        this.state.searchArr.map(async(query) => {
         const res = await fetch(`http://www.omdbapi.com/?s=${query.replace(" ","%20")}}&apikey=5660ed2b`,
            {method: 'GET',
            header:{
              ContentType: 'application/json',}}
             
              )
              return await res.json();       
        }))})
    } catch (err) {
      this.setState({
        error:{
          mes: err.message, isError:true}})
    }
  }

 

  getSearchResults = async(query) => {
    try {
      const res = await fetch(`http://www.omdbapi.com/?s=${query.replace(" ","%20")}}&apikey=5660ed2b`,
    {method: 'GET',
    header:{
      ContentType: 'application/json',}})
    this.setState({data: await res.json()})
    } catch (err) {
      this.setState({
        error:{
          mes: err.mes, isError:true}})
    }
  }

  render() {
    return (
      <>
        <Container fluid>
          <NavbarNetflix onSearchTextChange={this.handleSearchTextChange} searchText={this.state.searchText}/>
          {this.state.error.isError
          ?
          <Row>
            <Col>
              <Alert variant="danger" className="mx-4">{this.state.error.mes}</Alert>
            </Col>
          </Row>
          :
          this.state.data.length > 1
          ?
          <MoviePage sagas={this.state.data} moviePageHeadline={"Movies"} movieRowTitles={this.state.searchArr} onShowCommentsClick={this.handleShowCommentsClick}/>
          :
          <SearchResults results={this.state.data} moviePageHeadline={"Search Results"} onShowCommentsClick={this.handleShowCommentsClick}/>}
        </Container>
          {this.state.showComments?<Comments selectedMovie={this.state.selectedMovie} onShowCommentsClick={this.handleShowCommentsClick}/>:<></>}
        <NetflixFooter />
      </>
);
  }
}

export default App;
