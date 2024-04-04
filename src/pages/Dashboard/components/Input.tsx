interface InputProps {
  value: string;
  error: string;
  onChange: (value: string) => void;
  size?: "large";
  placeholder: string;
}

const sizes = {
  large: {
    input: "w-[20rem]",
    error: "w-[10rem]",
  },
};

function Input({ value, error, onChange, size, placeholder }: InputProps) {
  return (
    <div className="relative">
      {error && (
        <p
          className={`${
            size && sizes[size].error
          } text-sm text-red-400 font-bold absolute bottom-[-0.77rem] left-0 right-0 mx-auto w-[7rem] border-[1px] rounded-2xl border-red-500 bg-white text-center`}
        >
          {error}
        </p>
      )}
      <input
        type="text"
        value={value}
        className={`${
          size && sizes[size].input
        } border-2 w-full p-2 rounded-full`}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
