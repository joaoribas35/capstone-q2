import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import * as S from "../styles/style";
import { ServerJsonApi } from "../../services/api";
import React from "react";
import { useHistory } from "react-router";

let timeMsgError;

const FormLogin = () => {
  const [messageError, setMessageError] = React.useState(false);

  const history = useHistory();

  const schema = yup.object().shape({
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

  const getToken = async (data) => {
    const getToken = await ServerJsonApi.post("/login", data);
    return getToken.data.accessToken;
  };

  const handleForm = async (data) => {
    if (messageError) {
      clearTimeout(timeMsgError);
      setMessageError(false);
    }

    data.portfolio = {};

    try {
      const get_token = await getToken(data);
      localStorage.setItem("token", get_token);

      history.push("/dashboard");
    } catch (error) {
      setMessageError(true);
      timeMsgError = setTimeout(() => {
        setMessageError(false);
      }, 5000);
    }
  };

  return (
    <>
      <S.CardLogin>
        <S.Tittle>Login</S.Tittle>
        <S.Form onSubmit={handleSubmit(handleForm)}>
          <S.ContainerInput>
            {errors.email && <S.Erro>{errors.email.message}</S.Erro>}
            <S.Input placeholder="E-mail" {...register("email")} />
          </S.ContainerInput>

          <S.ContainerInput>
            {errors.password && <S.Erro>{errors.password.message}</S.Erro>}

            <S.Input
              placeholder="Senha"
              type="password"
              {...register("password")}
              errors={errors}
            />
          </S.ContainerInput>
          <S.Button type="submit" children="Entrar" />
        </S.Form>
      </S.CardLogin>

      {messageError && (
        <S.MessageError>Usuário ou senha incorreta</S.MessageError>
      )}
    </>
  );
};

export default FormLogin;
