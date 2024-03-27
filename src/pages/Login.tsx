import { SubmitHandler, useForm } from "react-hook-form";
import FormLayout from "../components/FormLayout";
import { LoginUserSchema, LoginUserSchemaType } from "../schemas/Auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "../services/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserSchemaType>({
    resolver: zodResolver(LoginUserSchema),
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmitForm: SubmitHandler<LoginUserSchemaType> = (data) => {
    const { email, password } = data;
    setIsLoading(true);
    axiosInstance
      .post("/auth/login", {
        email,
        password,
      })
      .then(() => {
        localStorage.setItem("isAuth", "true");
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <FormLayout>
      {error && <span>{error}</span>}
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <>
            <input
              type="text"
              placeholder="name@gmail.com"
              defaultValue=""
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}
            <input
              type="password"
              placeholder="your password"
              defaultValue=""
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            <button>Submit</button>
          </>
        )}
      </form>
    </FormLayout>
  );
}

export default Login;
