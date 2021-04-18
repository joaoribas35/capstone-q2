import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { UserInfo } from "../../Providers/userInfo";

import jwt_decode from "jwt-decode";

import * as S from "../styles/style";
import { ServerJsonApi } from "../../services/api";
import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

let timeMsgError;

const FormLogin = () => {
  const [messageError, setMessageError] = React.useState(false);
  // const { userId, setUserId, setToken, user, token, setUser } = UserInfo();

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
  // const userData = async (id, token) => {
  //   const userData = await ServerJsonApi.get(`/users/${id}`, {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  //   return userData;
  // };

  const handleForm = async (data) => {
    if (messageError) {
      clearTimeout(timeMsgError);
      setMessageError(false);
    }

    data.portfolio = {};

    try {
      //pega o token pelo post, e seta ele para o provider
      const get_token = await getToken(data);
      localStorage.setItem("token", get_token);
      // setToken(get_token);

      //pega o id do usuario to token acima, e seta o id de usuario ao provider
      // const user_id = jwt_decode(get_token);
      // setUserId(user_id.sub);

      //pega as informações do usuario pelo id acima e seta para o provider
      // const user_data = await userData(user_id.sub, get_token);
      // localStorage.setItem("userName", user_data.data.userName);
      // setUser(user_data.data);

      //redireciona para a pagina dashboard
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
