class Discount {
  constructor(value) {
    const validateError = this.validateDiscount(value);
    if (validateError) {
      throw new Error(validateError);
    }
    this.value = value;
  }

  validateDiscount = (value, price) => {
    if (value < 0) {
      throw "Discount must be a positive number";
    }
    if (value > price) {
      throw "Discount must be less than the price";
    }
    return null;
  };
  apply(price) {
    return price - price * this.value;
  }
  getValue() {
    return this.value;
  }
  setValue(value) {
    this.value = value;
  }
}

module.exports = Discount;
