import React from "react";
import Modal from "../Modal/Modal";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ServerJsonApi } from "../../services/api";

import * as S from "../styles/style";
import { ResultTransaction, TitleTransference } from "./style";
import { coinsList } from "../../db/ListCoins";
import jwtDecode from "jwt-decode";
import { format } from "date-fns";
import { GetTransactionsContext } from "../../Providers/getTransactions";
import { useContext } from "react";

let timeMsgSucess;
let timeMsgError;

const FormAddTransaction = () => {
  const [messageSucess, setMessageSucess] = React.useState(false);
  const [messageError, setMessageError] = React.useState(false);

  const [totalTransaction, setTotalTransaction] = React.useState(0);
  const [valueCusto, setValueCusto] = React.useState(0);
  const [valueQuantidade, setValueQuantidade] = React.useState(0);

  const { loadTransactions } = useContext(GetTransactionsContext);

  const token = localStorage.getItem("token");
  const { sub } = jwtDecode(token);

  const schema = yup.object().shape({
    coin: yup.string().required("Campo obrigatorio"),
    type: yup.string().required("Campo obrigatorio"),
    qty: yup.number().required("Campo obrigatorio"),
    cost: yup.number().required("Campo obrigatorio"),
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
    reset,
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

    ServerJsonApi.post("/transactions", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        loadTransactions();
        setMessageSucess(true);
        timeMsgSucess = setTimeout(() => {
          setMessageSucess(false);
        }, 5000);
        reset();
      })
      .catch((err) => {
        setMessageError(true);
        timeMsgError = setTimeout(() => {
          setMessageError(false);
        }, 5000);
      });
  };

  const handleQuantitaty = ({ target }) => {
    if (errors.qty && target.value.trim() !== "") {
      errors.qty = undefined;
    }

    setValueQuantidade(target.value);
  };

  const handleCusto = ({ target }) => {
    if (errors.cost && target.value.trim() !== "") {
      errors.cost = undefined;
    }

    setValueCusto(target.value);
  };

  return (
    <>
      <Modal>
        <TitleTransference>
          <img src="./icon/some.svg" alt="adição" />
          Adicionar transação
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
            {errors.qty && <S.Erro>{errors.qty.message}</S.Erro>}
            <S.Input
              placeholder="Quantidade"
              {...register("qty")}
              onChange={handleQuantitaty}
            />
          </S.ContainerInput>

          <S.ContainerInput>
            {errors.cost && <S.Erro>{errors.cost.message}</S.Erro>}
            <S.Input
              placeholder="Custo em reais"
              {...register("cost")}
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

          <S.Button type="submit" children="Adicionar transação" />
        </S.Form>
      </Modal>

      {messageSucess && (
        <S.MessageSucess>Transação adicionada com sucesso</S.MessageSucess>
      )}

      {messageError && (
        <S.MessageError>Erro ao adicionar transação</S.MessageError>
      )}
    </>
  );
};

export default FormAddTransaction;
