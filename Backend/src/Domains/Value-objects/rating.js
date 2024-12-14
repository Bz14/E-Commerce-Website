class Rating {
  constructor(value) {
    // const validateError = this.validateRating(value);
    // if (validateError) {
    //   throw new Error(validateError);
    // }
    this.value = value;
  }

  validateRating = (value) => {
    if (value < 0) {
      throw "Rating must be a positive number";
    }
    if (value > 5) {
      throw "Rating must be less than 5";
    }
  };

  getValue() {
    return this.value;
  }
}

module.exports = Rating;
