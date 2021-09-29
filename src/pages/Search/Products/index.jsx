import SearchForm from './SearchForm';
import ProductList from './ProductList';

const Products = (props) => {
  return (
    <>
      <SearchForm {...props}/>
      <ProductList />
    </>
  );
}

export default Products;