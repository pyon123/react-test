import SearchForm from './SearchForm';
import ProductList from './ProductList';

// styles
import styles from './Products.module.scss';

const Products = () => {
  return (
    <>
      <SearchForm />
      <ProductList />
    </>
  );
}

export default Products;