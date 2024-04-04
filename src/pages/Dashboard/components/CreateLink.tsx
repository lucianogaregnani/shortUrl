import { useState } from "react";
import useLinks from "../../../hooks/useLinks";
import Add from "../../../icons/Add";
import Input from "./Input";
import { validateUrl } from "../../../utils/validateUrl";

function CreateLink() {
  const [newLink, setNewLink] = useState("");
  const [error, setError] = useState("");
  const { addLink } = useLinks();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateUrl(newLink)) {
      addLink(newLink);
    } else {
      setError("Invalid Url");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <Input
        placeholder="https://youtube.com"
        error={error}
        size="large"
        value={newLink}
        onChange={setNewLink}
      />
      <button className="bg-indigo-500 hover:bg-indigo-600 transition-all p-2 rounded-full text-white">
        <Add />
      </button>
    </form>
  );
}

export default CreateLink;
