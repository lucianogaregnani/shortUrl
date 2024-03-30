import ListOfLinks from "./components/ListOfLinks";

function Dashboard() {
  return (
    <main className="flex justify-center items-center h-screen flex-col gap-2">
      <h1 className="text-3xl text-indigo-600 font-bold">My Links</h1>
      <ListOfLinks />
    </main>
  );
}

export default Dashboard;
