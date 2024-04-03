type ButtonColor = "red" | "green" | "indigo" | "black";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  color?: ButtonColor;
  children: React.ReactNode;
};

const buttonColors = {
  red: {
    text: "text-red-400",
    border: "border-red-400",
    bgHover: "hover:bg-red-400",
  },
  green: {
    text: "text-green-400",
    border: "border-green-400",
    bgHover: "hover:bg-green-400",
  },
  indigo: {
    text: "text-indigo-400",
    border: "border-indigo-400",
    bgHover: "hover:bg-indigo-400",
  },
  black: {
    text: "text-black",
    border: "border-black",
    bgHover: "hover:bg-black",
  },
};

function Button({ color, children, ...props }: ButtonProps) {
  const { text, border, bgHover } = buttonColors[color || "black"];

  return (
    <button
      {...props}
      className={`${text} ${border} ${bgHover} border-2 px-6 py-1 rounded-full transition-all hover:text-white font-semibold`}
    >
      {children}
    </button>
  );
}

export default Button;
