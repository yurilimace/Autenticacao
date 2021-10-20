import React from "react";
import {
  Form,
  FormControl,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

const LoginForm = () => {
  return (
    <Container fluid className="w-75">
      <Form>
        <Form.Group>
          <Form.Label> Usuário </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label> Senha </Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Row className="mt-3">
          <Col xl={6}>
            <Button className="w-100" variant="primary" type="submit">
              Login
            </Button>
          </Col>
          <Col xl={6}>
            <Button className="w-100" variant="primary" type="submit">
              Registre-se
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default LoginForm;
