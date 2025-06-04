const cartReducer = (state, action) => {
  switch (action.type) {
    case "addedProduct": {
      const itemInCart = state.find(
        (p) =>
          p.product.id === action.payload.product.id &&
          p.variantId === action.payload.variantId
      );

      if (itemInCart) {
        return state.map((p) =>
          p.product.id === action.payload.product.id &&
          p.variantId === action.payload.variantId
            ? { ...p, count: p.count + 1 }
            : p
        );
      }

      return [
        ...state,
        {
          product: action.payload.product,
          variantId: action.payload.variantId,
          count: 1,
        },
      ];
    }

    case "removedProduct": {
      return state.filter(
        (p) =>
          !(
            p.product.id === action.payload.product.id &&
            p.variantId === action.payload.variantId
          )
      );
    }

    case "incrementProductCount": {
      return state.map((p) =>
        p.product.id === action.payload.product.id &&
        p.variantId === action.payload.variantId
          ? { ...p, count: p.count + 1 }
          : p
      );
    }

    case "decrementProductCount": {
      const itemInCart = state.find(
        (p) =>
          p.product.id === action.payload.product.id &&
          p.variantId === action.payload.variantId
      );

      if (itemInCart && itemInCart.count > 1) {
        return state.map((p) =>
          p.product.id === action.payload.product.id &&
          p.variantId === action.payload.variantId
            ? { ...p, count: p.count - 1 }
            : p
        );
      } else {
        return state.filter(
          (p) =>
            !(
              p.product.id === action.payload.product.id &&
              p.variantId === action.payload.variantId
            )
        );
      }
    }

    case "clearCart": {
      return [];
    }

    default:
      break;
  }
};

export default cartReducer;
