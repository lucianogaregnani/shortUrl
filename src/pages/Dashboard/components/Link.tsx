import Button from "../../../components/Button";
import { Link } from "../../../types/Link";

const PAGE_URL = import.meta.env.PAGE_URL || "http://localhost:5173/";

function LinkCard({ longLink, shortLink, _id }: Link) {
  return (
    <article className="flex flex-col border-[1px] border-slate-200 items-center gap-4 p-3 rounded-2xl">
      <input
        type="text"
        value={longLink}
        className="border-2 w-full p-2 rounded-2xl"
      />
      <span className="b bg-indigo-500 p-2 rounded-2xl text-white font-bold">
        {`${PAGE_URL}${shortLink}`}
      </span>
      <div className="flex gap-2">
        <Button color="green">Edit</Button>
        <Button color="red">Delete</Button>
      </div>
    </article>
  );
}

export default LinkCard;
