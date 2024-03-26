export interface AuthContextType {
  isAuth: boolean;
  accesToken: string;
  error: string;
  isLoading: boolean;
  changeIsAuth: (value: boolean) => void;
  changeToken: (newToken: string) => void;
}
