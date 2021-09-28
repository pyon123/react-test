import Category from './Category';
import Products from './Products';

// styles
import styles from './Search.module.scss';

function Search() {
  return (
    <div className={styles['search-wrapper']}>
      <div className={styles.category}>
        <Category />
      </div>
      <div className={styles.products}>
        <Products />
      </div>
    </div>
  );
}

export default Search;