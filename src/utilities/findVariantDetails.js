const findVariantDetails = (cartItem, variantId) => {
  const details = {};
  const matchedVariant = cartItem.product.variant.find(
    (variantOption) => variantOption.id === cartItem.variantId
  );

  if (!matchedVariant) return details;

  cartItem.product.variantProperties.forEach((property) => {
    details[property] = matchedVariant[property];
  });

  return details;
};

export default findVariantDetails;
