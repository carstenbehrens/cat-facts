import config from "../config/config";

class ImageService {
  /**
   * Search an image
   * See https://unsplash.com/documentation#search-photos
   *
   * @param {string} query - Search terms
   * @param {number?} perPage - Number of results per page
   */
  async search(query, perPage = 1) {
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${config.accessKey}&per_page=${perPage}`
      );
      const data = await res.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default ImageService;
