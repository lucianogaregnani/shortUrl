import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="p-10 md:p-20 h-screen gap-3 flex flex-col text-center items-center justify-center">
      <header className="absolute top-0 left-0 w-14">
        <Link
          to="https://www.linkedin.com/in/luciano-garegnani/"
          target="_blank"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path
              fill="#0078d4"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
            />
            <path
              d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
              opacity=".05"
            />
            <path
              d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
              opacity=".07"
            />
            <path
              fill="#fff"
              d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
            />
          </svg>
        </Link>
      </header>
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
          <span className="text-2xl md:text-4xl font-bold text-green-400">
            After Short Url
          </span>
          <p className="bg-slate-700 border-[1px] border-slate-400 p-3 text-md md:text-xl rounded-2xl text-white font-semibold">
            https://shorturl-gold.vercel.app/U5d3xl
          </p>
        </div>
      </section>
      <Link
        to="/login"
        className="text-white font-bold bg-indigo-500 hover:bg-indigo-400 p-4 text-xl md:text-2xl rounded-2xl"
      >
        Get started
      </Link>
      <div className="absolute bottom-0 w-full z-[-10]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
          <path
            fill="#4338ca"
            fillOpacity="1"
            d="M0,32L60,48C120,64,240,96,360,128C480,160,600,192,720,202.7C840,213,960,203,1080,170.7C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </main>
  );
}

export default Home;
