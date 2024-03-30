/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Form from "../components/Form";
import { LoginUserSchema } from "../schemas/Auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";
import useAuth from "../hooks/useAuth";
import { authApi } from "../services/authApi";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginUserSchema),
  });
  const navigate = useNavigate();
  const { changeIsAuth, changeError, error } = useAuth();

  const handleSubmitForm: SubmitHandler<FieldValues> = (data) => {
    const { email, password } = data;
    authApi
      .login({ email, password })
      .then(() => {
        localStorage.setItem("isAuth", "true");
        changeIsAuth(true);
        navigate("/");
      })
      .catch((err: any) => {
        if (axios.isAxiosError(err)) {
          changeError(err.response?.data?.error);
        } else {
          changeError(err.message);
        }
      });
  };

  return (
    <Form
      onSubmit={handleSubmitForm}
      handleSubmit={handleSubmit}
      error={error}
      type="login"
    >
      <Input
        type="text"
        placeholder="name@gmail.com"
        inputName="email"
        labelText="Email"
        errorMessage={errors.email?.message?.toString()}
        register={register}
      />
      <Input
        type="password"
        placeholder="your password"
        inputName="password"
        labelText="Password"
        errorMessage={errors.password?.message?.toString()}
        register={register}
      />
    </Form>
  );
}

export default Login;
