import { useState } from "react";

function useCopy({ text }: { text: string }) {
  const [copy, setCopy] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(text);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 4000);
  };

  return { copy, copyText };
}

export default useCopy;
