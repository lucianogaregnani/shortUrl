/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler, useForm } from "react-hook-form";
import FormLayout from "../components/FormLayout";
import { LoginUserSchema, LoginUserSchemaType } from "../schemas/Auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "../services/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserSchemaType>({
    resolver: zodResolver(LoginUserSchema),
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmitForm: SubmitHandler<LoginUserSchemaType> = (data) => {
    const { email, password } = data;
    axiosInstance
      .post("/auth/login", {
        email,
        password,
      })
      .then(() => {
        localStorage.setItem("isAuth", "true");
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
    <FormLayout>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="w-[90%] xl:w-[35%] text-center flex flex-col gap-5 text-2xl border-2 shadow-[0_0px_30px_5px_rgba(0,0,0,0.1)] py-10 px-10 rounded-2xl"
      >
        {error && <span className="text-red-500 font-medium">{error}</span>}
        <>
          <label className="flex flex-col relative">
            <span className="text-3xl font-bold text-indigo-600">Email</span>
            <input
              type="text"
              placeholder="name@gmail.com"
              defaultValue=""
              className="p-2 pl-4 border-2 rounded-3xl"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 font-medium text-lg absolute bottom-[-1.8rem] left-1">
                {errors.email.message}
              </span>
            )}
          </label>
          <label className="flex flex-col relative">
            <span className="text-3xl font-bold text-indigo-600">Password</span>
            <input
              type="password"
              placeholder="your password"
              defaultValue=""
              className="p-2 pl-4 border-2 rounded-3xl"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500 font-medium text-lg absolute bottom-[-1.8rem] left-1">
                {errors?.password?.message}
              </span>
            )}
          </label>
          <p className="text-slate-400 mt-4 text-base">
            Do you not have an account?{" "}
            <a href="" className="text-indigo-500 font-medium hover:underline">
              Sign up
            </a>
          </p>
          <button className="hover:bg-indigo-500 transition-all bg-indigo-600 text-white font-semibold p-2 rounded-full">
            Submit
          </button>
        </>
      </form>
    </FormLayout>
  );
}

export default Login;
