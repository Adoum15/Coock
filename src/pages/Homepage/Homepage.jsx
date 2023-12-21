import styles from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";
import React from "react";
import Loading from "../../components/Loading/Loading";
import { ApiContext } from "../../context/ApiContext";
import Search from "./components/Search/Search";
import { useFetchData } from "../../hook/useFetchData";

function Homepage() {
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const BASE_URL_API = React.useContext(ApiContext);
  const [[recipes, setRecipes], isLoading] = useFetchData(BASE_URL_API, page);

  const updateRecipe = (updatedRecipe) => {
    setRecipes(
      recipes.map((r) => (r._id === updatedRecipe._id ? updatedRecipe : r))
    );
  };
  
  function deleteRecipe(_id) {
    setRecipes(recipes.filter((r) => r._id !== _id));
  }

  return (
    <div className="flex-fill container d-flex flex-column p-20">
      <h1 className="my-30">
        Découvrez nos nouvelles recettes{" "}
        <small className={styles.small}>{recipes.length}</small>
      </h1>
      <div
        className={`card d-flex flex-fill flex-column p-20 ${styles.contentCard} `}
      >
        <Search setSearch={setSearch} />

        {isLoading && !recipes.length ? (
          <Loading />
        ) : (
          <div className={styles.grid}>
            {recipes
              .filter((r) => r.title.toLocaleLowerCase().startsWith(search))
              .map((r) => (
                <Recipe
                  key={r._id}
                  recipe={r}
                  deleteRecipe={deleteRecipe}
                  toogleLikedRecipe={updateRecipe}
                />
              ))}
          </div>
        )}
        <div className="d-flex flex-row justify-content-center align-items-center p-20">
          <button onClick={() => setPage(page + 1)} className="btn btn-primary">
            Charger plus de recettes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
