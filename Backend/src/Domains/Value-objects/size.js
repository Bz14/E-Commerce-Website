class Size {
  constructor(value) {
    const validateError = this.validateSize(value);
    if (validateError) {
      throw new Error(validateError);
    }
    this.value = value;
  }

  validateSize = (sizes) => {
    const sizeList = ["XS", "S", "M", "L", "XL", "XXL"];
    for (const size of sizes) {
      if (!sizeList.includes(size)) {
        throw "Size must be one of XS, S, M, L, XL, XXL";
      }
    }
  };
  getValue() {
    return this.value;
  }
}

module.exports = Size;
