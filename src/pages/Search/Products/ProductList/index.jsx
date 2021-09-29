import React from 'react';
import ProductItem from '../ProductItem';
import ProductSkeleton from '../ProductSkeleton';

// styles
import styles from './ProductList.module.scss';

// redux
import { connect } from 'react-redux'

const ProductList = ({ loading, properties }) => {
  

  return (
    <div className={styles.productList}>
      {!loading && properties && properties.length > 0 ?
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

// map state to props
const mapStateToProps = ({ propertyReducer }) => {
  const { loading, properties } = propertyReducer;
  return { loading, properties }
}

export default connect(mapStateToProps)(ProductList);