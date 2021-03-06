import './App.css';
import Display from './components/Display';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Player from './components/Player';

function App() {
  return (
    <div className="App">

      <h1>Shifumi</h1>

      <Container >
        <Row className="row-cols-2" >
          <Display />
        </Row>
      </Container>

      <Container className="mt-5">
        <Row className="row-cols-3" >
          <Player />
        </Row>
      </Container>

    </div>
  );
}

export default App;
