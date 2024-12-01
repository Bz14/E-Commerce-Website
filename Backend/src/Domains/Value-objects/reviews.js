class Reviews {
  constructor(reviews) {
    const validateError = this.validateReviews(reviews);
    if (validateError) {
      throw new Error(validateError);
    }
    this.reviews = reviews;
  }

  validateReviews = () => {
    if (reviews < 0) {
      throw "Reviews must be a positive number";
    }
  };
}

module.exports = Reviews;
