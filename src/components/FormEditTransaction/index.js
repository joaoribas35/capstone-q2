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
} from "../FormAddTransaction/style";

import { coinsList } from "../../db/ListCoins";
import { format } from "date-fns";
import { fetchTransaction } from "./fetchTransaction";
import { calcQuantitaty } from "./calcQuantitaty";

let timeMsgSucess;
let timeMsgError;

const FormEditTransaction = ({ idTransaction }) => {
  const [messageSucess, setMessageSucess] = React.useState(false);
  const [messageError, setMessageError] = React.useState(false);

  const [totalTransaction, setTotalTransaction] = React.useState(0);
  const [valueCusto, setValueCusto] = React.useState(0);
  const [valueQuantidade, setValueQuantidade] = React.useState(0);
  const [valueIsNational, setValueIsNational] = React.useState(true);

  const token = localStorage.getItem("token");

  const schema = yup.object().shape({
    coin: yup.string().required("Campo obrigatorio"),
    type: yup.string().required("Campo obrigatorio"),
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
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    calcQuantitaty(valueCusto, valueQuantidade, setTotalTransaction);
  }, [valueCusto, valueQuantidade]);

  React.useEffect(() => {
    fetchTransaction(
      idTransaction,
      token,
      setValue,
      calcQuantitaty,
      setTotalTransaction,
      setValueCusto,
      setValueQuantidade,
      setValueIsNational
    );
  }, [idTransaction, token, setValue, setTotalTransaction]);

  const handleForm = async (data) => {
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

    ServerJsonApi.patch(`/transactions/${idTransaction}`, data, {
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

  const handleQuantitaty = ({ target }) => {
    if (errors.quantidade && target.value.trim() !== "") {
      errors.quantidade = undefined;
    }

    setValueQuantidade(target.value);
  };

  const handleCusto = ({ target }) => {
    if (errors.custo && target.value.trim() !== "") {
      errors.custo = undefined;
    }

    setValueCusto(target.value);
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
            {errors.type && <S.Erro>{errors.type.message}</S.Erro>}
            <S.Select {...register("type")}>
              <option value="">Tipo</option>
              <option value="buy">Compra</option>
              <option value="sell">Venda</option>
            </S.Select>
          </S.ContainerInput>

          <S.ContainerInput>
            {errors.quantidade && <S.Erro>{errors.quantidade.message}</S.Erro>}
            <S.Input
              placeholder="Quantidade"
              type="number"
              {...register("quantidade")}
              onChange={handleQuantitaty}
            />
          </S.ContainerInput>

          <S.ContainerInput>
            {errors.custo && <S.Erro>{errors.custo.message}</S.Erro>}
            <S.Input
              placeholder="Custo em reais"
              type="number"
              {...register("custo")}
              onChange={handleCusto}
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
              defaultChecked={valueIsNational ? true : false}
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
              defaultChecked={valueIsNational ? false : true}
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

          <S.Button type="submit" children="Editar transação" />
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
