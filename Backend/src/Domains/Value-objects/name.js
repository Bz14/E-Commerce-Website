class Name {
  constructor(name) {
    if (!name) {
      throw new Error("Name is required");
    }
    if (typeof name !== "string") {
      throw new Error("Name must be a string");
    }
    const validateError = this.validate(name);
    if (validateError) {
      throw new Error(validateError);
    }
    this.name = name.trim();
  }

  validate(name) {
    if (name.length < 3) {
      throw "Name must be at least 3 characters long";
    }
    if (length > 100) {
      throw "Name must be at most 100 characters long";
    }
    return null;
  }
}