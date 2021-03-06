import './App.css';
import Display from './components/Display';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function App() {
  return (
    <div className="App">
      <h1>Shifumi</h1>
      <Container >
        <Row className="row-cols-2" >
          <Display />
        </Row>
      </Container>
    </div>
  );
}

export default App;
