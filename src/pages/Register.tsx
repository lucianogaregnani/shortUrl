/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { RegisterUserSchema } from "../schemas/Auth.schemas";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../services/axios";
import Input from "../components/Input";
import axios from "axios";
import Form from "../components/Form";

function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterUserSchema),
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmitForm: SubmitHandler<FieldValues> = (data) => {
    const { email, password } = data;
    axiosInstance
      .post("/auth/register", {
        email,
        password,
      })
      .then(() => {
        navigate("/login");
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
      type="register"
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
      <Input
        type="password"
        placeholder="your password"
        inputName="repassword"
        labelText="Repassword"
        errorMessage={errors.repassword?.message?.toString()}
        register={register}
      />
    </Form>
  );
}

export default Register;
