import React, {useEffect} from 'react';
import ProductItem from '../ProductItem';
import ProductSkeleton from '../ProductSkeleton';

// styles
import styles from './ProductList.module.scss';

// redux
import { connect } from 'react-redux'
// redux action
import {
  action_loadProperty
} from '../../../../store/actions'

const ProductList = ({ action_loadProperty, loading, properties }) => {
  useEffect(() => {
    action_loadProperty();
  }, [action_loadProperty]);

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

// map state to props
const mapStateToProps = ({ propertyReducer }) => {
  const { loading, properties } = propertyReducer;
  return { loading, properties }
}

export default connect(mapStateToProps, {
  action_loadProperty
})(ProductList);