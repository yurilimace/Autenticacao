import * as yup from "yup";

export const UsuarioSchema = yup.object({
  email: yup.string().required("Campo email obrigatorio"),
  senha: yup.string().required("Campo senha obrigatório"),
});

export const NovoUsuarioSchema = yup.object({
  nome: yup.string().required("Campo usuario obrigatório"),
  email: yup.string().required("Campo email obrigatório"),
  senha: yup.string().required("Campo senha obrigatório"),
  confirmarSenha: yup
    .string()
    .oneOf([yup.ref("senha"), null], "senhas devem ser iguais"),
});
