const findVariantDetails = (p, variantId) => {
  const details = {};
  const matchedVariant = p.product.variant.find((v) => v.id === p.variantId);

  if (!matchedVariant) return details;

  p.product.variantProperties.forEach((property) => {
    details[property] = matchedVariant[property];
  });

  return details;
};

export default findVariantDetails;
