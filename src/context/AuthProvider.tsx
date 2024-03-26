/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { AuthContextType } from "../types/AuthContext";
import { axiosInstance } from "../services/axios";

const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  accesToken: "",
  isLoading: true,
  error: "",
  changeIsAuth: () => {},
  changeToken: () => {},
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);
  const [accesToken, setAccesToken] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!accesToken) {
      axiosInstance
        .get("/auth/refresh")
        .then((res) => {
          setAccesToken(res.data.token);
          setIsAuth(true);
        })
        .catch((err: any) => {
          setError(err.response.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  const changeIsAuth = (newAuth: boolean) => {
    setIsAuth(newAuth);
  };

  const changeToken = (newToken: string) => {
    setAccesToken(newToken);
  };

  return (
    <AuthContext.Provider
      value={{
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
