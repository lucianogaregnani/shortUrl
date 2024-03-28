/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Form from "../components/Form";
import { LoginUserSchema } from "../schemas/Auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "../services/axios";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginUserSchema),
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { changeIsAuth } = useAuth();

  const handleSubmitForm: SubmitHandler<FieldValues> = (data) => {
    const { email, password } = data;
    axiosInstance
      .post("/auth/login", {
        email,
        password,
      })
      .then(() => {
        localStorage.setItem("isAuth", "true");
        changeIsAuth(true);
        navigate("/");
      })
      .catch((err: any) => {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.error);
        } else {
          setError(err.message);
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
