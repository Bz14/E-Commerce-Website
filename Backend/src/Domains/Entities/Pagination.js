class Pagination {
  constructor(page, limit) {
    this.page = page;
    this.limit = limit;
  }

  GetPagination() {
    const offset = (this.page - 1) * this.limit;
    return {
      offset,
      limit: this.limit,
    };
  }
}

module.exports = Pagination;
