import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

const Search = () => {
  const appId = import.meta.env.VITE_APP_ID;
  const apiKey = import.meta.env.VITE_APP_KEY;
  const [food_recipes, setFood_Recipes] = useState([]);
  const [search_recipe, setSearch_Recipe] = useState("");
  const [search_query, setSearch_Query] = useState("Chicken");

  useEffect(() => {
    getRecipes();
  }, [search_query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search_query}&app_id=${appId}&app_key=${apiKey}`
    );
    const data = await response.json();
    setFood_Recipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch_Recipe(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setSearch_Query(search_recipe);
    setSearch_Recipe("");
  };

  return (
    <div className="">
      <div className="mx-auto p-8 lg:p-40 sm:px-6 xl:px-[80px] lg:px-[60px] bg-[url('/recipe.jpg')]  bg-cover bg-no-repeat ">
        <form
          onSubmit={getSearch}
          className=" bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <div className="relative justify-center flex-grow w-full sm:w-1/2">
            <input
              type="text"
              name="search"
              value={search_recipe}
              placeholder="Search for recipes..."
              onChange={updateSearch}
              className="w-full py-3 px-4 bg-gray-100 border border-lime-400  focus:border-lime-500 rounded-lg text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:bg-transparent focus:shadow-md"
            />
          </div>
          <button
            type="submit"
            className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-6 rounded-lg transform hover:scale-105 transition-transform focus:outline-none sm:w-auto sm:inline-block w-full"
          >
            Search Recipe
          </button>
        </form>
      </div>

      <div className="container mx-auto mt-8 p-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-10">
          Result for {search_query} Recipes
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  
                lg:grid-cols-4 gap-4"
        >
          {food_recipes.map((recipe) => (
            <RecipeCard key={recipe.recipe.label} recipe={recipe.recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
