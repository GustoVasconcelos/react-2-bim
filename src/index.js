import ReactDOM from 'react-dom/client';
import MinhasRotas from './minhasRotas';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <MinhasRotas />
          </Col>
        </Row>
      </Container>
    </>
);