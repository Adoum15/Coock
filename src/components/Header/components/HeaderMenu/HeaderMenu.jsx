import styles from './HeaderMenu.module.scss'

const HeaderMenu = ({setPage}) => {
  return(
      <ul className={`${styles.MenuContainer} card p-20`}>
        <li onClick={()=>setPage('admin')}>Ajouter une recette</li>
        <li>whishlist</li>
        <li>Connexion</li>
      </ul>
  )
}

export default HeaderMenu;