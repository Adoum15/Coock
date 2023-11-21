import styles from './Search.module.scss';

const Search = ({setSearch}) => {

  const handleInput = (e) => {
    const search = e.target.value;
    setSearch(search.trim().toLowerCase());
  };

  return (
    <div
          className={`d-flex flex-row justify-content-center align-item-center my-30 mb-20 ${styles.searchBar}`}
        >
          <i className="fa-solid fa-magnifying-glass mr-15"></i>
          <input
            onInput={handleInput}
            className="flex-fill"
            type="text"
            placeholder="rechercher"
          />
        </div>
  )
}

export default Search;