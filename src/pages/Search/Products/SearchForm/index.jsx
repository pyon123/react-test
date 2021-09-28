import React, {useState} from 'react';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

// icons
import SearchIcon from '../../../../assets/icons/Search.svg'

// styles
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const [searchVal, setSearchVal] = useState('');

  const onChange = (value) => {
    setSearchVal(value)
  }

  const onSearch = () => {
    console.log('search')
  }

  return (
    <div className={styles.searchForm}>
      <Input
        placeholder='Plaats, buurt, adres, etc.'
        onChange={onChange}
        value={searchVal}
        icon={SearchIcon}
        classes={{
          inputWrapper: styles.inputWrapper,
          inputIcon: styles.inputIcon,
          inputText: styles.inputText,
        }}
      />

      <Button
        classes={{
          button: styles.button,
          loading: styles.buttonLoading,
        }}
        text='Search'
        prevent
        stopPropagation
        onClick={onSearch}
      />
    </div>
  );
}

export default SearchForm;