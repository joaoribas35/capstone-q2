import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import * as S from "../styles/style";

const FormLogin = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatorio"),
    username: yup.string().required("Campo obrigatorio"),
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
    <S.CardRegister>
      <S.Tittle>Register</S.Tittle>
      <S.Form onSubmit={handleSubmit(handleForm)}>
        {errors.name ? (
          <S.Erro>{errors.name.message}</S.Erro>
        ) : (
          <S.Erro></S.Erro>
        )}
        <S.Input placeholder="Nome" {...register("name")} errors={errors} />
        {errors.username ? (
          <S.Erro>{errors.username.message}</S.Erro>
        ) : (
          <S.Erro></S.Erro>
        )}
        <S.Input
          placeholder="Nome de Usuario"
          {...register("username")}
          errors={errors}
        />
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
          {...register("password")}
          errors={errors}
        />

        <S.Button type="submit" children="Criar Conta" />
      </S.Form>
    </S.CardRegister>
  );
};

export default FormLogin;
