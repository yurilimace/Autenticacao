import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import LoginForm from "../../Formularios/Login";
import NovoUsarioForm from "../../Formularios/RegistroUsuario";
import { useLocation } from "react-router";
const Login = () => {
  const location = useLocation();
  return (
    <Container fluid className={"h-100"}>
      <Row className="h-100">
        <Col className="p-0">
          <div className="d-flex h-100 align-items-center justify-content-center bg-primary">
            <FaUserAlt size={"100"} color="white" />
          </div>
        </Col>
        <Col className="p-0">
          <div className="d-flex h-100 align-items-center justify-content-center ">
            {location.pathname.includes("login") ? (
              <LoginForm />
            ) : (
              <NovoUsarioForm />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
