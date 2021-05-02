import './styles/css/App.css';
import NavbarNetflix from './components/NavbarNetflix';
import { Container } from 'react-bootstrap';
import React from 'react';
import MoviePage from './components/MoviePage';
import NetflixFooter from './components/NetflixFooter';
import SearchResults from './components/SearchResults';

class App extends React.Component {
  state = {
    searchArr: ["Harry Potter", "Lord of the Rings", "Terminator" ],
    data: [],
    query: "",
    isError: false,
    error: {
      errMes: '',
      errCod: '',
    },
  };

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
          isError:true, 
          error:{...this.state.error,
            errorMes:err.statusText, 
            errCod:err.status}})
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
        isError:true, 
        error:{...this.state.error,
          errorMes:err.statusText, 
          errCod:err.status}})
    }
    
  }



  render() {
    return (
      <>
        <Container fluid>
          {/* {console.log(this.state.data, this.state.query)} */}
          <NavbarNetflix onSearchTextChange={this.handleSearchTextChange} searchText={this.state.searchText}/>
          {this.state.data.length > 1?
          <MoviePage sagas={this.state.data} moviePageHeadline={"Movies"} movieRowTitles={this.state.searchArr}/>
          :
          <SearchResults results={this.state.data} moviePageHeadline={"Search Results"}/>}
        </Container>
        <NetflixFooter />
      </>
);
  }
}

export default App;
