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

    const { coin, type, qty, cost, is_national, date } = response.data;

    const dataFormat = date.split("-");

    setValueCusto(cost);
    setValueQuantidade(qty);
    setValueIsNational(is_national);

    setValue("coin", coin);
    setValue("type", type);
    setValue("qty", qty);
    setValue("cost", cost);
    setValue("date", `${dataFormat[2]}-${dataFormat[1]}-${dataFormat[0]}`);

    calcQuantitaty(qty, cost, setTotalTransaction);
  } catch (error) {}
};
