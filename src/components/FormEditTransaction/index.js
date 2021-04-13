import React from "react";
import Modal from "../Modal/Modal";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ServerJsonApi } from "../../services/api";

import * as S from "../styles/style";
import {
  ResultTransaction,
  TitleTransference,
} from "./FormAddTransaction/style";

import { coinsList } from "../../db/ListCoins";
import { format } from "date-fns";
import jwtDecode from "jwt-decode";

let timeMsgSucess;
let timeMsgError;

const FormEditTransaction = () => {
  const [messageSucess, setMessageSucess] = React.useState(false);
  const [messageError, setMessageError] = React.useState(false);

  const [totalTransaction, setTotalTransaction] = React.useState(0);
  const [valueCusto, setValueCusto] = React.useState(0);
  const [valueQuantidade, setValueQuantidade] = React.useState(0);

  const token = localStorage.getItem("token");
  const { sub } = jwtDecode(token);

  const schema = yup.object().shape({
    moeda: yup.string().required("Campo obrigatorio"),
    tipo: yup.string().required("Campo obrigatorio"),
    quantidade: yup.string().required("Campo obrigatorio"),
    custo: yup.string().required("Campo obrigatorio"),
    is_national: yup
      .boolean()
      .typeError("Selecione uma opção")
      .required("Campo obrigatorio"),
    date: yup
      .date()
      .typeError("Insira uma data com formato válido")
      .required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    let resultOne = 0;
    let resultTwo = 0;

    resultOne = Number(valueCusto);
    resultTwo = Number(valueQuantidade);

    const multiplyResult = resultOne * resultTwo;

    if (!isNaN(multiplyResult)) {
      setTotalTransaction(multiplyResult);
    } else {
      setTotalTransaction(0);
    }
  }, [valueCusto, valueQuantidade]);

  const handleForm = async (data) => {
    data.userId = sub;

    const outputFormat = format(data.date, "yyyy-MM-dd");
    data.date = outputFormat;

    if (messageSucess) {
      clearTimeout(timeMsgSucess);
      setMessageSucess(false);
    }
    if (messageError) {
      clearTimeout(timeMsgError);
      setMessageError(false);
    }

    ServerJsonApi.patch("/transactions", data, {
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
          Editar transação
        </TitleTransference>

        <S.Form onSubmit={handleSubmit(handleForm)}>
          <S.ContainerInput>
            {errors.moeda && <S.Erro>{errors.moeda.message}</S.Erro>}
            <S.Select {...register("moeda")}>
              <option value="">Moeda</option>

              {coinsList.map(({ name, coin_id, symbol, image }) => (
                <option key={coin_id} value={coin_id}>
                  {name} ({symbol})
                </option>
              ))}
            </S.Select>
          </S.ContainerInput>

          <S.ContainerInput>
            {errors.tipo && <S.Erro>{errors.tipo.message}</S.Erro>}
            <S.Select {...register("tipo")}>
              <option value="">Tipo</option>
              <option value="compra">Compra</option>
              <option value="venda">Venda</option>
            </S.Select>
          </S.ContainerInput>

          <S.ContainerInput>
            {errors.quantidade && <S.Erro>{errors.quantidade.message}</S.Erro>}
            <S.Input
              placeholder="Quantidade"
              type="number"
              {...register("quantidade")}
              onChange={({ target }) => setValueQuantidade(target.value)}
            />
          </S.ContainerInput>

          <S.ContainerInput>
            {errors.custo && <S.Erro>{errors.custo.message}</S.Erro>}
            <S.Input
              placeholder="Custo em reais"
              type="number"
              {...register("custo")}
              onChange={({ target }) => setValueCusto(target.value)}
            />
          </S.ContainerInput>

          {errors.is_national && (
            <S.Erro style={{ marginBottom: "0" }}>
              {errors.is_national.message}
            </S.Erro>
          )}
          <S.ContainerInput style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginRight: "1rem" }}>Corretora Nacional?</p>

            <input
              style={{ marginRight: ".3rem" }}
              type="radio"
              id="national"
              {...register("is_national")}
              value={true}
            />
            <label htmlFor="national" style={{ marginRight: ".8rem" }}>
              Sim
            </label>

            <input
              style={{ marginRight: ".3rem" }}
              type="radio"
              id="not_national"
              {...register("is_national")}
              value={false}
            />
            <label htmlFor="not_national">Não</label>
          </S.ContainerInput>

          <S.ContainerInput>
            {errors.date && <S.Erro>{errors.date.message}</S.Erro>}
            <S.Input type="date" {...register("date")} u />
          </S.ContainerInput>

          <ResultTransaction>
            <label>Total</label>
            <p>R$ {totalTransaction.toFixed(2).replace(".", ",")}</p>
          </ResultTransaction>

          <S.Button type="submit" children="Criar Conta" />
        </S.Form>
      </Modal>

      {messageSucess && (
        <S.MessageSucess>Transação editada com sucesso</S.MessageSucess>
      )}

      {messageError && (
        <S.MessageError>Erro ao editar transação</S.MessageError>
      )}
    </>
  );
};

export default FormEditTransaction;
