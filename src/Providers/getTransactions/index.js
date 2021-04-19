import { ServerJsonApi } from "../../services/api";
import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const GetTransactionsContext = createContext();

export const GetTransactionsProvider = ({ children }) => {
  const [mockTransactions, setMockTransactions] = useState([]);
  const token = localStorage.getItem("token");

  const { sub } = jwtDecode(token);

  async function loadTransactions() {
    await ServerJsonApi.get(`/transactions?userId=${sub}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      setMockTransactions(response.data);
    });
  }
  useEffect(() => {
    loadTransactions();
  }, [token, sub]);

  return (
    <>
      <GetTransactionsContext.Provider
        value={{ mockTransactions, loadTransactions }}
      >
        {children}
      </GetTransactionsContext.Provider>
    </>
  );
};
