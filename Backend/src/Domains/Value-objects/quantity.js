class Quantity {
  constructor(quantity) {
    const validateError = this.validateQuantity(quantity);
    if (validateError) {
      throw new Error(validateError);
    }
    this.quantity = quantity;
  }

  validateQuantity = (quantity) => {
    if (quantity < 0) {
      throw "Quantity must be a positive number";
    }
  };
}

module.exports = Quantity;
