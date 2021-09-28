import ProductItem from '../ProductItem';
import ProductSkeleton from '../ProductSkeleton';

// styles
import styles from './ProductList.module.scss';

const properties = [
  {
    id: 1,
    img: '/images/image-1.png',
    title: 'Luxe villa in Alicante',
    address: 'Murcia, Costa Cálida, Spanje',
    slappkamers: 3,
    badkamers: 2,
    price: 550
  },
  {
    id: 2,
    img: '/images/image-1.png',
    title: 'Luxe villa in Alicante',
    address: 'Murcia, Costa Cálida, Spanje',
    slappkamers: 3,
    badkamers: 2,
    price: 550
  }
]

const ProductList = () => {
  return (
    <div className={styles.productList}>
      {properties && properties.length > 0 ?
        properties.map(property => 
          <ProductItem key={property.id} {...property} />
        )
        :
        [1, 2, 3, 4, 5, 6].map(i => 
          <ProductSkeleton key={i}/>
        )
      }
    </div>
  );
}

export default ProductList;