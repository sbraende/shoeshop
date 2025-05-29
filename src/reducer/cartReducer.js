const cartReducer = (state, action) => {
  switch (action.type) {
    case "addedProduct": {
      const itemInCart = state.find((p) => p.product.id === action.payload.id);

      if (itemInCart) {
        return state.map((p) =>
          p.product.id === action.payload.id ? { ...p, count: p.count + 1 } : p
        );
      }
      return [...state, { product: action.payload, count: 1 }];
    }
    case "removedProduct": {
      return state.filter((p) => p.product.id !== action.payload.id);
    }

    case "incrementProductCount": {
      // TODO: Should have a max-number of items that
      return state.map((p) =>
        p.product.id === action.payload.id ? { ...p, count: p.count + 1 } : p
      );
    }

    case "decrementProductCount": {
      const itemInCart = state.find((p) => p.product.id === action.payload.id);

      if (itemInCart.count > 1) {
        // Decrement product count
        return state.map((p) =>
          p.product.id === action.payload.id ? { ...p, count: p.count - 1 } : p
        );
      } else {
        // Remove item from cart
        return state.filter((p) => p.product.id !== action.payload.id);
      }
    }

    default:
      break;
  }
};

export default cartReducer;
