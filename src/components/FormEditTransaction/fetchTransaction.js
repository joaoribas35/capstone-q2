import { ServerJsonApi } from "../../services/api";

export const fetchTransaction = async (
  idTransaction,
  token,
  setValue,
  calcQuantitaty,
  setTotalTransaction,
  setValueCusto,
  setValueQuantidade,
  setValueIsNational,
  setCoin
) => {
  try {
    const response = await ServerJsonApi.get(`/transactions/${idTransaction}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const { coin, tipo, quantidade, custo, is_national, date } = response.data;

    setValueCusto(custo);
    setValueQuantidade(quantidade);
    setValueIsNational(is_national);

    setCoin(coin);
    setValue("tipo", tipo);
    setValue("quantidade", quantidade);
    setValue("custo", custo);
    setValue("date", date);

    calcQuantitaty(quantidade, custo, setTotalTransaction);
  } catch (error) {}
};
