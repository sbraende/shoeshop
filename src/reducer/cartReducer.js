const cartReducer = (state, action) => {
  switch (action.type) {
    case "addedProduct": {
      const itemInCart = state.find(
        (cartItem) =>
          cartItem.product.id === action.payload.product.id &&
          cartItem.variantId === action.payload.variantId
      );

      if (itemInCart) {
        return state.map((cartItem) =>
          cartItem.product.id === action.payload.product.id &&
          cartItem.variantId === action.payload.variantId
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
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
        (cartItem) =>
          !(
            cartItem.product.id === action.payload.product.id &&
            cartItem.variantId === action.payload.variantId
          )
      );
    }

    case "incrementProductCount": {
      return state.map((cartItem) =>
        cartItem.product.id === action.payload.product.id &&
        cartItem.variantId === action.payload.variantId
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      );
    }

    case "decrementProductCount": {
      const itemInCart = state.find(
        (cartItem) =>
          cartItem.product.id === action.payload.product.id &&
          cartItem.variantId === action.payload.variantId
      );

      if (itemInCart && itemInCart.count > 1) {
        return state.map((cartItem) =>
          cartItem.product.id === action.payload.product.id &&
          cartItem.variantId === action.payload.variantId
            ? { ...cartItem, count: cartItem.count - 1 }
            : cartItem
        );
      } else {
        return state.filter(
          (cartItem) =>
            !(
              cartItem.product.id === action.payload.product.id &&
              cartItem.variantId === action.payload.variantId
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
