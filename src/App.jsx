import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import HeroSection from "./components/HeroSection";
import RadioSection from "./components/RadioSection";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import NewEntries from "./components/NewEntries";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.min.css";

function App() {
  return (
    <>
      <title>Apple Music - Home</title>
      <Container fluid>
        <Row>
          <Col sm={0} md={2}>
            <MyNavbar />
          </Col>
          <Col sm={12} md={10}>
            <HeroSection />
            <RadioSection />
            <NewEntries />
            <Explore />
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
