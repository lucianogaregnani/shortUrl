import { HTMLInputTypeAttribute } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  labelText?: string;
  errorMessage?: string;
  inputName: string;
  register: UseFormRegister<FieldValues>;
}

function Input({
  type,
  placeholder,
  labelText,
  errorMessage,
  inputName,
  register,
}: InputProps) {
  return (
    <label className="flex flex-col relative">
      <span className="text-3xl font-bold text-indigo-600">{labelText}</span>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue=""
        className="p-2 pl-4 border-2 rounded-3xl"
        {...register(inputName)}
      />
      {errorMessage && (
        <span className="text-red-500 font-medium text-lg absolute bottom-[-1.8rem] left-1">
          {errorMessage}
        </span>
      )}
    </label>
  );
}

export default Input;
