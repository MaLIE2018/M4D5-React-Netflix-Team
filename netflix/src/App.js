import logo from "./logo.svg";
import "./styles/css/App.css";
import NavbarNetflix from "./components/NavbarNetflix";
import { Container } from "react-bootstrap";
import React from "react"
import HarryFilms from "./data/harrypotter.json"
import MoviePage from "./components/MoviePage"

class App extends React.Component {

  state ={}


  render() {return (
    <Container fluid>
      <NavbarNetflix />
      <MoviePage/>
    </Container>
  );}
}

export default App;
