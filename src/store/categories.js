const initialState = {
  categories: [
    {
      name: 'Starter Item',
      displayName: 'Starter Item',
      description: 'Doran\'s Ring, Doran\'s Blade, Doran\'s Shield, Dark Seal',
    },
    {
      name: 'Basic Item',
      displayName: 'Basic Item',
      description: 'Amplifying Tome, Dagger, Cloth Armor, Long Sword, Ruby Crystal',
    },
    {
      name: 'Mythic Item',
      displayName: 'Mythic Item',
      description: 'Eclipse, Riftmaker, Galeforce, Goredrinker, Trinity Force',
    },
  ],
  activeCategory: null,
};

function categoryReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'CHANGE CATEGORY':
      return {
        ...state,
        categories: state.categories.map(category => {
          if(category.name === payload.name) {
            return {
              name: payload.name,
              displayName: payload.displayName,
              description: payload.description,
            }
          }
          return category;
        }),
        activeCategory: payload.name
      }

    default:
      return state;
  }
};

export const changeCategory = (category) => {

  return {
    type: 'CHANGE CATEGORY',
    payload: category,
  };
};

export default categoryReducer;