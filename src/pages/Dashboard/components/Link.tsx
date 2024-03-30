import { Link } from "../../../types/Link";

function LinkCard({ longLink, shortLink, _id }: Link) {
  return (
    <article className="border-2 border-slate-400 shadow-[0_0px_5px_0px_rgba(0,0,0,0.1)] flex items-center gap-4 p-3 rounded-2xl">
      <input
        type="text"
        value={longLink}
        className="border-2 w-full p-2 rounded-2xl"
      />
      <span className="b bg-indigo-500 p-2 rounded-2xl text-white font-bold">
        {shortLink}
      </span>
      <button className="bg-green-400 p-2 rounded-2xl text-white font-bold">
        Editar
      </button>
      <button className="bg-red-500 p-2 rounded-2xl text-white font-bold">
        Eliminar
      </button>
    </article>
  );
}

export default LinkCard;
