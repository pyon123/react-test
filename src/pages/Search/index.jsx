import styles from './Search.module.scss';

function Search() {
  return (
    <div className={styles['search-wrapper']}>
      <div className={styles.left}>
        hello
      </div>
      <div className={styles.right}>
        world
      </div>
    </div>
  );
}

export default Search;