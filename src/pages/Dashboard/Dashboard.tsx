import CreateLink from "./components/CreateLink";
import Header from "./components/Header";
import ListOfLinks from "./components/ListOfLinks";

function Dashboard() {
  return (
    <>
      <Header />
      <main className="p-4 flex justify-center items-center flex-col gap-6">
        <h1 className="mb-3 text-6xl text-indigo-600 font-bold">My Links</h1>
        <CreateLink />
        <ListOfLinks />
      </main>
    </>
  );
}

export default Dashboard;
