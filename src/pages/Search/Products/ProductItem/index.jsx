import AddressIcon from '../../../../assets/icons/Address.svg'

// styles
import styles from './ProductItem.module.scss';

const ProductItem = ({img, title, address, slappkamers, badkamers, price}) => {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.itemImage}>
        <img src={img} alt={img} />
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>
        <div className={styles.address}>
          <img src={AddressIcon} alt='address' />
          <p>{address}</p>
        </div>
        <div className={styles.properties}>
          {slappkamers} Slappkamers<span>•</span>{badkamers} Badkamers
        </div>
        <div className={styles.price}>€ {price.toFixed(3)}</div>
      </div>
    </div>
  );
}

export default ProductItem;