import React, {useState, useEffect} from 'react';

import Category from './Category';
import Products from './Products';

// styles
import styles from './Search.module.scss';

// redux
import { connect } from 'react-redux'
// redux action
import {
  action_loadProperty
} from '../../store/actions'

function Search({action_loadProperty, loading}) {
  const [searchData, setSearchData] = useState({
    search: '',
    sortBy: 'hPrice',
    type: 'villa',
  });

  useEffect(() => {
    action_loadProperty(searchData);
  }, [action_loadProperty, searchData]);

  const onFilterChange = (type, item) => {
    setSearchData({
      ...searchData,
      [type]: item.value
    })
  }

  const onSearch = (val) => {
    setSearchData({
      ...searchData,
      search: val,
    })
  }

  return (
    <div className='container'>
      <div className={styles['search-wrapper']}>
        <div className={styles.category}>
          <Category onFilterChange={onFilterChange}/>
        </div>
        <div className={styles.products}>
          <Products onSearch={onSearch} loading={loading}/>
        </div>
      </div>
    </div>
  );
}

// map state to props
const mapStateToProps = ({ propertyReducer }) => {
  const { loading } = propertyReducer;
  return { loading }
}

export default connect(mapStateToProps, {
  action_loadProperty
})(Search);