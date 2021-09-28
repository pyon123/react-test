import styles from './App.module.scss';

function App() {
  return (
    <div className='container'>
      <div className={styles['app-wrapper']}>
        <div className={styles.left}>
          hello
        </div>
        <div className={styles.right}>
          world
        </div>
      </div>
    </div>
  );
}

export default App;
