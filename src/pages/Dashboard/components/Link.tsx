import { useState } from "react";
import Button from "../../../components/Button";
import useCopy from "../../../hooks/useCopy";
import useLinks from "../../../hooks/useLinks";
import Check from "../../../icons/Check";
import Clipboard from "../../../icons/Clipboard";
import { Link } from "../../../types/Link";

const PAGE_URL = import.meta.env.PAGE_URL || "http://localhost:5173/";

function LinkCard({ longLink, shortLink, _id }: Link) {
  const { renovateLink, removeLink, error } = useLinks();
  const [link, setLink] = useState(longLink);
  const { copy, copyText } = useCopy({ text: `${PAGE_URL}${shortLink}` });

  const handleDelete = () => {
    removeLink(_id);
  };

  const handleUpdate = () => {
    renovateLink(link, _id);
  };

  return (
    <article className="flex flex-col border-[1px] border-slate-200 items-center gap-4 p-3 rounded-2xl">
      <div className="relative">
        {error && (
          <p className="text-sm text-red-400 font-bold absolute bottom-[-0.77rem] left-0 right-0 mx-auto w-[7rem] border-[1px] rounded-2xl border-red-500 bg-white text-center">
            {error}
          </p>
        )}
        <input
          type="text"
          value={link}
          className="border-2 w-full p-2 rounded-full"
          onChange={(e) => setLink(e.target.value)}
        />
      </div>

      <button
        onClick={copyText}
        className="flex items-center gap-1 bg-indigo-500 p-2 rounded-lg text-white font-bold relative"
      >
        <div className="transition-all bg-blue-400 rounded-full p-1">
          {copy ? <Check /> : <Clipboard />}
        </div>
        {`${PAGE_URL}${shortLink}`}
      </button>
      <div className="flex gap-2">
        <Button color="green" onClick={handleUpdate}>
          Edit
        </Button>
        <Button color="red" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </article>
  );
}

export default LinkCard;
