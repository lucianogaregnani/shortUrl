import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";
import { Link } from "react-router-dom";

interface FormProps {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  error: string;
  type: "login" | "register";
}

function Form({ children, onSubmit, error, type, handleSubmit }: FormProps) {
  return (
    <main className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[90%] lg:w-[40%] text-center flex flex-col gap-6 text-2xl border-2 shadow-[0_0px_30px_5px_rgba(0,0,0,0.1)] py-10 px-10 rounded-2xl"
      >
        {error && <span className="text-red-500 font-medium">{error}</span>}
        {children}
        {type === "login" ? (
          <p className="text-slate-400 mt-4 text-base">
            Do you not have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-500 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        ) : (
          <p className="text-slate-400 mt-4 text-base">
            Do you have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-500 font-medium hover:underline"
            >
              Log in
            </Link>
          </p>
        )}
        <button className="hover:bg-indigo-500 transition-all bg-indigo-600 text-white font-semibold p-2 rounded-full">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Form;
