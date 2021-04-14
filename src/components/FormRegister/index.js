import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ServerJsonApi } from "../../services/api";
import { useHistory } from "react-router-dom";

import * as S from "../styles/style";
import React from "react";

// Armazena o setTimeOut
let timeMsgSucess;
let timeMsgError;

const FormLogin = () => {
  const [messageSucess, setMessageSucess] = React.useState(false);
  const [messageError, setMessageError] = React.useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatorio"),
    userName: yup.string().required("Campo obrigatorio"),
    email: yup
      .string()
      .email("Deve ser um e-mail valido")
      .required("Campo obrigatorio"),
    password: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    if (messageSucess) {
      clearTimeout(timeMsgSucess);
      setMessageSucess(false);
    }

    if (messageError) {
      clearTimeout(timeMsgError);
      setMessageError(false);
    }

    data.portfolio = {};

    ServerJsonApi.post("/register", data)
      .then((response) => {
        setMessageSucess(true);

        timeMsgSucess = setTimeout(() => {
          setMessageSucess(false);
        }, 5000);
      })
      .catch((err) => {
        setMessageError(true);

        timeMsgError = setTimeout(() => {
          setMessageError(false);
        }, 5000);
      });
    history.push("/login");
  };

  return (
    <>
      <S.CardRegister>
        <S.Tittle>Register</S.Tittle>

        <S.Form onSubmit={handleSubmit(handleForm)}>
          <S.ContainerInput>
            {errors.name && <S.Erro>{errors.name.message}</S.Erro>}
            <S.Input placeholder="Nome" {...register("name")} errors={errors} />
          </S.ContainerInput>

          <S.ContainerInput>
            {errors.userName && <S.Erro>{errors.userName.message}</S.Erro>}
            <S.Input
              placeholder="Nome de Usuario"
              {...register("userName")}
              errors={errors}
            />
          </S.ContainerInput>

          <S.ContainerInput>
            {errors.email && <S.Erro>{errors.email.message}</S.Erro>}
            <S.Input placeholder="E-mail" {...register("email")} />
          </S.ContainerInput>

          <S.ContainerInput>
            {errors.password && <S.Erro>{errors.password.message}</S.Erro>}
            <S.Input
              placeholder="Senha"
              {...register("password")}
              errors={errors}
              type="password"
            />
          </S.ContainerInput>

          <S.Button type="submit" children="Criar Conta" />
        </S.Form>
      </S.CardRegister>

      {messageSucess && (
        <S.MessageSucess>Cadastro realizado com sucesso</S.MessageSucess>
      )}

      {messageError && (
        <S.MessageError>Erro ao cadastrar usuário</S.MessageError>
      )}
    </>
  );
};

export default FormLogin;
