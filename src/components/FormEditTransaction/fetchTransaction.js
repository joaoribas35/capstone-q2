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

    const dataFormat = date.replace(/(\d{4})-(\d{2})-(\d{2})/g, "$3-$2-$1");

    setValueCusto(cost);
    setValueQuantidade(qty);
    setValueIsNational(is_national);

    setValue("coin", coin);
    setValue("type", type);
    setValue("qty", qty);
    setValue("cost", cost);
    setValue("date", dataFormat);

    console.log("Resposta Data" + response.data.id, response.data);
    calcQuantitaty(qty, cost, setTotalTransaction);
  } catch (error) {}
};
