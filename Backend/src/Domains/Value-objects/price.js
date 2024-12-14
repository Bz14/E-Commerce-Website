class Price {
  constructor(price) {
    // if (!price) {
    //   throw new Error("Price is required");
    // }
    // const validateError = this.validatePrice(price);
    // if (validateError) {
    //   throw new Error(validateError);
    // }
    this.price = price;
  }

  validatePrice(price) {
    if (price < 0) {
      throw "Price must be a positive number";
    }
    if (price > 1000000) {
      throw "Price must be at most 1000000";
    }
    return null;
  }
}

module.exports = Price;
