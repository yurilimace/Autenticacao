import React from "react";
import {
  Form,
  FormControl,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

import {useForm} from 'react-hook-form'

import {UsuarioSchema} from '../../Schemas/usuarioSchema'
import { yupResolver } from '@hookform/resolvers/yup';
import { DispararAlerta } from "../../Utils/Alert/Alert";

const LoginForm = () => {
  const {register,handleSubmit,watch,formState:{errors}} = useForm({
    resolver:yupResolver(UsuarioSchema)
  });


  const onSubmit = data => {
    console.log(data)
    DispararAlerta("erro","erro ao logar")
  }

  return (
    <Container fluid className="w-75">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label> Usuário </Form.Label>
          <Form.Control type="text" {...register("usuario")} className={errors.usuario?.message && "is-invalid"} />
          <p className="invalid-feedback"> {errors.usuario?.message}  </p>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label> Senha </Form.Label>
          <Form.Control type="password" {...register("senha")} className={errors.senha?.message && "is-invalid"} />
          <p className="invalid-feedback"> {errors.senha?.message}  </p>
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
