import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

// styles
import styles from './Category.module.scss';

const Category = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
console.log('==>', styles.notchedOutline)
  return (
    <>
      <Select
        // classes={{notchedOutline: styles.notchedOutline}}
        inputProps={{classes:{notchedOutline: styles.notchedOutline}}}
        fullWidth
        value={age}
        onChange={handleChange}
        startAdornment='Sort by'
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </>
  );
}

export default Category;