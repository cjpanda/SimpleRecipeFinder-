import Search from "./components/Search";

function App() {
  return (
    <>
      {/* Navbar */}
      <header className="bg-lime-600 py-4 text-white w-full">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="block">Recipe Finder</span>
          </h1>
        </div>
      </header>

      <Search />

      <footer>
        <hr className="bg-lime-300 mt-10 h-[2px]" />
        <p className="mx-auto text-center p-5 text-slate-500">
          Developed by cjpanda(ceejaydevlab)
        </p>
      </footer>
    </>
  );
}

export default App;
