import { connect } from 'react-redux';
import { changeCategory } from '../../store/categories';
// import { activeProducts } from '../../store/products';

const Categories = (props) => {

  const { categories, changeCategory } = props;

  return (
    <>
      <h1>Categories</h1>

      {
        categories.map((category, idx) => (
          <div
            key={`category-${idx}`}
            onClick={() => changeCategory(category)}
          >{category.name}
          </div>
        ))
      }

    </>
  );
};



const mapStateToProps = ({ categoriesRed, productsRed }) => {

  return {
    categories: categoriesRed.categories,
    products: productsRed.products,
  };
};

const mapDispatchToProps = {
  changeCategory,
  // activeProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);