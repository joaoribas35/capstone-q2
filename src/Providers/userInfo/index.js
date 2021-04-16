import { ServerJsonApi } from "../../services/api";

import jwt_decode from "jwt-decode";

import { useState, useEffect, createContext, useContext } from "react";

export const GetUserInfoContext = createContext();

export const GetUserInfoProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState("");

  return (
    <GetUserInfoContext.Provider
      value={{ setUser, user, userId, setUserId, token, setToken }}
    >
      {children}
    </GetUserInfoContext.Provider>
  );
};

export const UserInfo = () => useContext(GetUserInfoContext);
