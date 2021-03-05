import ImageService from "../../../src/services/imageService";
import config from "../../../src/config/config";

describe("#imageService", () => {
  const imageService = new ImageService();
  beforeEach(() => {
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ json: () => {} }));
  });

  describe("#search image", () => {
    test("calls the API with the correct query params", async () => {
      const pages = 5;
      const searchTerm = "cat";

      await imageService.search(searchTerm, pages);

      expect(global.fetch).toHaveBeenCalledWith(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${config.accessKey}&per_page=${pages}`
      );
    });

    test("calls the API with the correct default query params", async () => {
      const searchTerm = "cat";

      await imageService.search(searchTerm);

      expect(global.fetch).toHaveBeenCalledWith(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${config.accessKey}&per_page=1`
      );
    });
  });
});
