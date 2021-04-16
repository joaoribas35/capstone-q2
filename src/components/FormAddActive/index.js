import React from "react";
import Modal from "../Modal/Modal";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ServerJsonApi } from "../../services/api";

import * as S from "../styles/style";
import { coinsList } from "../../db/ListCoins";
import jwtDecode from "jwt-decode";
import { TitleTransference } from "../FormAddTransaction/style";

let timeMsgSucess;
let timeMsgError;

const FormAddActive = () => {
  const [messageSucess, setMessageSucess] = React.useState(false);
  const [messageError, setMessageError] = React.useState(false);

  const token = localStorage.getItem("token");
  const { sub } = jwtDecode(token);

  const schema = yup.object().shape({
    coin: yup.string().required("Campo obrigatorio"),
    "to-be-percent": yup
      .number()
      .typeError("O campo só aceita números")
      .required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    data.userId = sub;

    if (messageSucess) {
      clearTimeout(timeMsgSucess);
      setMessageSucess(false);
    }
    if (messageError) {
      clearTimeout(timeMsgError);
      setMessageError(false);
    }

    ServerJsonApi.post("/portfolio", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
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
  };

  return (
    <>
      <Modal>
        <TitleTransference>
          <img src="./icon/some.svg" alt="adição" />
          Percentual ideal
        </TitleTransference>

        <S.Form onSubmit={handleSubmit(handleForm)}>
          <S.ContainerInput>
            {errors.coin && <S.Erro>{errors.coin.message}</S.Erro>}
            <S.Select {...register("coin")}>
              <option value="">Moeda</option>

              {coinsList.map(({ name, coin_id, symbol, image }) => (
                <option key={coin_id} value={coin_id}>
                  {name} ({symbol})
                </option>
              ))}
            </S.Select>
          </S.ContainerInput>

          <S.ContainerInput>
            {errors["to-be-percent"] && (
              <S.Erro>{errors["to-be-percent"].message}</S.Erro>
            )}
            <S.Input
              placeholder="Percentual"
              type="number"
              {...register("to-be-percent")}
            />
          </S.ContainerInput>

          <S.Button type="submit" children="Adicionar Ativo" />
        </S.Form>
      </Modal>

      {messageSucess && (
        <S.MessageSucess>Ativo adicionado com sucesso</S.MessageSucess>
      )}

      {messageError && <S.MessageError>Erro ao adicionar Ativo</S.MessageError>}
    </>
  );
};

export default FormAddActive;
