export function calcQuantitaty(
  valueCusto,
  valueQuantidade,
  setTotalTransaction
) {
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
}
