import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomHomepage from './components/CustomHomepage';



function App() {
  return (
    <Container fluid>
      <CustomHomepage />
    </Container>
  );
}

export default App;
