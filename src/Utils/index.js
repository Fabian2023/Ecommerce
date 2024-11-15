
/**
 * @param {Array} products carproducts :array de obj
 * @returns {number} total price
 */
export const totalPrice = (products) => {
  let total = 0;

  products.forEach((product) => (total += product.price))
  return total
};
