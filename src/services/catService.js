class CatService {
  /**
   * Get breeds
   *
   * @param {string?} limit - Limit the number of results max is 1000 per page, default is one.
   * @param {number?} page - Which page to display max is 98, default is one.
   */
  async getBreeds(limit = 1, page = 1) {
    try {
      const res = await fetch(
        `http://localhost:3000/breeds?_limit=${limit}&_page=${page}`
      );
      const data = await res.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default CatService;
