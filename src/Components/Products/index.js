import { connect } from 'react-redux';
// import { changeCategory } from '../../store/categories';

const Product = (props) => {

  const { products } = props

  return (
    <>
      <h1>Products</h1>
      {
        products.products.map((product, idx) => (
          <div key={`product-${idx}`}>
            {product.name}
          </div>
        ))
      }
    </>
  );
};

const mapStateToProps = ({ products }) => {
  return {
    products: products,
  };
};

export default connect(mapStateToProps)(Product);