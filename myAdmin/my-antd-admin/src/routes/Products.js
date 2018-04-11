import React from 'react';
import { connect } from 'dva';
import styles from './Products.css';
import ProductList from '../components/ProductList'

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div className={styles.products}>
      <h2>List of Products</h2>
      <ProductList
        onDelete={handleDelete}
        products={products}
      />
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products
}))(Products);
