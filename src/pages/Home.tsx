import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="p-3 md:p-20 h-screen gap-3 flex flex-col text-center items-center justify-center">
      <section className="z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-indigo-500">
          Short URL
        </h1>
        <p className="text-xl md:text-3xl text-slate-400 font-medium">
          Shorten your URLs for a cleaner and more concise look
        </p>
      </section>
      <section className="border-[2px] bg-slate-100/20 p-4 rounded-2xl">
        <div>
          <span className="text-2xl md:text-4xl font-bold text-red-500/90">
            Before Short Url
          </span>
          <p className="border-[1px] border-slate-400 bg-slate-700 p-3 rounded-2xl text-md md:text-xl text-white font-semibold">
            https://chat.openai.com/c/2ff97a59-e059-4edf-9536-eec28e5a6bb8
          </p>
        </div>
        <div>
          <span className="text-2xl md:text-4xl font-bold text-green-600/90">
            After Short Url
          </span>
          <p className="bg-slate-700 border-[1px] border-slate-400 p-3 text-md md:text-xl rounded-2xl text-white font-semibold">
            https://shorturl-gold.vercel.app/U5d3xl
          </p>
        </div>
      </section>
      <Link
        to="/login"
        className=" text-white font-bold bg-indigo-500 p-4 text-xl md:text-2xl rounded-2xl"
      >
        Get started
      </Link>
    </main>
  );
}

export default Home;
