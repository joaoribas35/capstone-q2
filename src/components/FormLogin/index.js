import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import * as S from "../styles/style";

const FormLogin = () => {
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

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <S.CardLogin>
      <S.Tittle>Login</S.Tittle>
      <S.Form onSubmit={handleSubmit(handleForm)}>
        {errors.email ? (
          <S.Erro>{errors.email.message}</S.Erro>
        ) : (
          <S.Erro></S.Erro>
        )}
        <S.Input placeholder="E-mail" {...register("email")} />
        {errors.password ? (
          <S.Erro>{errors.password.message}</S.Erro>
        ) : (
          <S.Erro></S.Erro>
        )}
        <S.Input
          placeholder="Senha"
          type="password"
          {...register("password")}
          errors={errors}
        />

        <S.Button type="submit" children="Entrar" />
      </S.Form>
    </S.CardLogin>
  );
};

export default FormLogin;
