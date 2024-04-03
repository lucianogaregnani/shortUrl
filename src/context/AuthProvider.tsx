/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { AuthContextType } from "../types/AuthContext";
import { authApi } from "../services/authApi";

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  accesToken: "",
  isLoading: true,
  error: "",
  changeIsAuth: () => {},
  changeToken: () => {},
  changeError: () => {},
  changeLoading: () => {},
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const isAuthLocal = localStorage.getItem("isAuth");
  const [isAuth, setIsAuth] = useState(isAuthLocal === "true");
  const [accesToken, setAccesToken] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isAuthLocal) {
      localStorage.setItem("isAuth", "false");
    }
    if (isAuth && !accesToken) {
      authApi
        .refreshToken()
        .then((res) => {
          setAccesToken(res.token);
        })
        .catch((err) => {
          setError(err.error);
        });
    }
  }, [isAuth]);

  const changeLoading = (newLoading: boolean) => {
    setIsLoading(newLoading);
  };

  const changeError = (newError: string) => {
    setError(newError);
  };

  const changeIsAuth = (newAuth: boolean) => {
    setIsAuth(newAuth);
  };

  const changeToken = (newToken: string) => {
    setAccesToken(newToken);
  };

  return (
    <AuthContext.Provider
      value={{
        changeError,
        changeLoading,
        isAuth,
        changeIsAuth,
        accesToken,
        changeToken,
        isLoading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
