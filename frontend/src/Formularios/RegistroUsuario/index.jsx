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

import {NovoUsuarioSchema} from '../../Schemas/usuarioSchema'
import { yupResolver } from '@hookform/resolvers/yup';
import { CriarNovoUsuario } from "../../Services/Login";

const NovoUsarioForm = () => {
  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver:yupResolver(NovoUsuarioSchema)
  });


  const onSubmit =   async (data) => {
    const responseData = await CriarNovoUsuario(data,"Teste ola deu certo")
    console.log(responseData)
  }

  return (
    <Container fluid className="w-75">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mt-3">
          <Form.Label> Usuário </Form.Label>
          <Form.Control type="text"   {...register("usuario")} className={errors.usuario?.message && "is-invalid"} />
          <p className="invalid-feedback"> {errors.usuario?.message}  </p>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label> Email  </Form.Label>
          <Form.Control type="email" {...register("email")} className={errors.email?.message && "is-invalid"} />
          <p className="invalid-feedback"> {errors.email?.message}  </p>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label> Senha </Form.Label>
          <Form.Control type="password" {...register("senha")} className={errors.senha?.message && "is-invalid"} />
          <p className="invalid-feedback"> {errors.senha?.message}  </p>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label> Confirmar Senha </Form.Label>
          <Form.Control type="password" {...register("confirmarSenha")} className={errors.confirmarSenha?.message && "is-invalid"} />
          <p className="invalid-feedback"> {errors.confirmarSenha?.message}  </p>
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
