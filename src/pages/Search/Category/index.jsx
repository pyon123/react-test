import React from 'react';
import Dropdown from '../../../components/DropDown';

import { SORTS, TYPES, FilterTypes } from './constants';
// styles
import styles from './Category.module.scss';

const Category = ({onFilterChange}) => {
  return (
    <>
      <Dropdown
        items={SORTS.items}
        value={SORTS.items[1]}
        prefix={SORTS.prefix}
        onChange={item => onFilterChange(FilterTypes.sort, item)}
        classes={{
          dropdown: styles.dropdown,
          toggle: styles.toggle,
          label: styles.label,
          prefix: styles.prefix,
          dropdownContent: styles.dropdownContent,
          item: styles.item,
          active: styles.active
        }}
      />

      <Dropdown
        items={TYPES.items}
        value={TYPES.items[1]}
        prefix={TYPES.prefix}
        onChange={item => onFilterChange(FilterTypes.type, item)}
        classes={{
          dropdown: styles.dropdown,
          toggle: styles.toggle,
          label: styles.label,
          prefix: styles.prefix,
          dropdownContent: styles.dropdownContent,
          item: styles.item,
          active: styles.active
        }}
      />
    </>
  );
}

export default Category;