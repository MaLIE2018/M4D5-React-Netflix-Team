import logo from './logo.svg';
import './styles/css/App.css';
import NavbarNetflix from './components/NavbarNetflix';
import { Container } from 'react-bootstrap';
import React from 'react';
import HarryFilms from './data/harrypotter.json';
import MoviePage from './components/MoviePage';
import NetflixFooter from './components/NetflixFooter';

class App extends React.Component {
  state = {
    searchArr: ["Harry%20Potter", "Lord%20of%20the%20rings", "Terminator" ],
    data: [],
  };

  async componentWillMount () {
    let sagas = await Promise.all(
      this.state.searchArr.map(async(query) => {
       const res = await fetch(`http://www.omdbapi.com/?s=${query}}&apikey=5660ed2b`,
          {method: 'GET',
          header:{
            ContentType: 'application/json',}})
          return await res.json()
        }))
    this.setState({data: sagas})
  }
  render() {
    return (
      <>
        <Container fluid>
          <NavbarNetflix />
          {console.log(this.state.data)}
          <MoviePage sagas={this.state.data}/>
        </Container>
        <NetflixFooter />
      </>
    );
  }
}

export default App;
