class CatService {
  /**
   * Get breeds
   * See https://catfact.ninja/ for more information.
   *
   * @param {string?} limit - Limit the number of results max is 1000 per page, default is one.
   * @param {number?} page - Which page to display max is 98, default is one.
   */
  async getBreeds(limit = 1, page = 1) {
    try {
      const res = await fetch(
        `https://catfact.ninja/breeds?limit=${limit}&page=${page}`
      );
      const data = await res.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default CatService;
