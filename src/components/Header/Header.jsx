import styles from "./Header.module.scss";
import cookchef from "../../assets/images/cookchef.png";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import { useState } from "react";

function Header({ setPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <img onClick={()=>setPage('homepage')} src={cookchef} alt="logo" />
      </div>
      <ul className={styles.headerList}>
        <button onClick={() => setPage("admin")} className="btn btn-primay mr-15">
          Ajouter une recette
        </button>
        <button className="mr-15 btn btn-reverse-primary">
          <i className="fa-solid fa-heart mr-5"></i>
          <span>whishlist</span>
        </button>
        <button className="btn btn-primay">connexion</button>
      </ul>
      <i
        onClick={() => {
          setIsMenuOpen(true);
        }}
        className={`${styles.headerXs} fa-solid fa-bars`}
      ></i>
      {isMenuOpen && (
        <>
          <div
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className="calc"
          ></div>
          <HeaderMenu setPage={setPage}/>
        </>
      )}
    </header>
  );
}

export default Header;
