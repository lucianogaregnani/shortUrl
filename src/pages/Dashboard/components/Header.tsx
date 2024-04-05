/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Icon from "../../../icons/Icon";
import useAuth from "../../../hooks/useAuth";
import { authApi } from "../../../services/authApi";
import { useState } from "react";

function Header() {
  const { changeIsAuth } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignOut = async () => {
    try {
      await authApi.logOut();
      localStorage.setItem("isAuth", "false");
      changeIsAuth(false);
      navigate("/login");
    } catch (error: any) {
      setError("There was an error");
      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };

  return (
    <header className="p-2 flex justify-between items-center">
      <Icon />
      <Button color="indigo" onClick={handleSignOut}>
        {error ? error : <span>Sign out</span>}
      </Button>
    </header>
  );
}

export default Header;
