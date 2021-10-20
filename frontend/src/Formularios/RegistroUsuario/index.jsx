import React from "react";
import {
  Form,
  FormControl,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

const NovoUsarioForm = () => {
  return (
    <Container fluid className="w-75">
      <Form>
        <Form.Group className="mt-3">
          <Form.Label> Usuário </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label> Email </Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label> Senha </Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label> Confirmar Senha </Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Row className="mt-3">
          <Col xl={12}>
            <Button className="w-100" variant="primary" type="submit">
              Criar Registro
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default NovoUsarioForm;
