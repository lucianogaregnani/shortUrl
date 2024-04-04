/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Icon from "../../../icons/Icon";
import useAuth from "../../../hooks/useAuth";
import { authApi } from "../../../services/authApi";

function Header() {
  const { changeIsAuth } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await authApi.logOut();
      localStorage.setItem("isAuth", "false");
      changeIsAuth(false);
      navigate("/login");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <header className="p-2 flex justify-between items-center">
      <Icon />
      <Button color="indigo" onClick={handleSignOut}>
        Sign out
      </Button>
    </header>
  );
}

export default Header;
