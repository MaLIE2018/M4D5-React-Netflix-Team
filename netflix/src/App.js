import logo from "./logo.svg";
import "./styles/css/App.css";
import NavbarNetflix from "./components/NavbarNetflix";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <NavbarNetflix />
    </Container>
  );
}

export default App;
