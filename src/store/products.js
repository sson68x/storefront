const initialState = {
  products: [
    {
      category: 'Starter Item',
      name: 'Doran\'s Blade',
      description: '+8 attack damage, +80 health',
      price: 'G450',
      inventoryCount: 10,
    },
    {
      category: 'Basic Item',
      name: 'Long Sword',
      description: '+10 attack damage',
      price: 'G350',
      inventoryCount: 15,
    },
    {
      category: 'Mythic Item',
      name: 'Trinity Force',
      description: '+35 attack damage, +20 ability haste, +30% attack speed, +300 health',
      price: 'G3333',
      inventoryCount: 3,
    },
  ],
};

function productReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'CHANGE CATEGORY':
      return {
        ...state,
        products: state.products.filter(product => {
            if(product.name === payload.name) {
              return {
                name: payload.name,
                description: payload.description,
                price: payload.price,
                inventoryCount: payload.inventoryCount,
              }
            }
            return product;
          }),
          activeCategory: payload.name
        }
  
      default:
        return state;
    }
  };

export const activeProducts = (products) => {
  
  return {
    type: 'CHANGE CATEGORY',
    payload: products,
  }
}

export default productReducer;