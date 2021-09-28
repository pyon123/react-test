import Skeleton from 'react-loading-skeleton';

import styles from './ProductSkeleton.module.scss'

const ProductSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <Skeleton
        duration={2}
        width={260}
        height={160}
        className={styles.skeleton}
      />

      <div className={styles.content}>
        <Skeleton
          duration={2}
          width={360}
          height={24}
          className={styles.skeleton}
        />

        <div className = {styles.item}>
          <Skeleton
            duration={2}
            width={200}
            height={21}
            className = {styles.skeleton}
          />
        </div>

        <div className = {styles.item}>
          <Skeleton
            duration={2}
            width={200}
            height={21}
            className = {styles.skeleton}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductSkeleton;