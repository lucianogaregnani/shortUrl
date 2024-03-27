import { SubmitHandler, useForm } from "react-hook-form";
import FormLayout from "../components/FormLayout";
import { LoginUserSchemaType } from "../schemas/Auth.schemas";

function Login() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserSchemaType>();

  const handleSubmitForm: SubmitHandler<LoginUserSchemaType> = (data) => {
    const { email, password } = data;
    console.log({ email, password });
    reset();
  };

  return (
    <FormLayout>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <input
          type="text"
          placeholder="name@gmail.com"
          defaultValue=""
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
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
      </form>
    </FormLayout>
  );
}

export default Login;
