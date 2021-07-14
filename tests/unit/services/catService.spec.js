import CatService from "../../../src/services/catService";

describe("#catService", () => {
  const catService = new CatService();
  beforeEach(() => {
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ json: () => {} }));
  });

  describe("#get breed", () => {
    test("calls the API with the default query params", async () => {
      await catService.getBreeds();
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:3000/breeds?_limit=1&_page=1"
      );
    });

    test("calls the API with the correct query params", async () => {
      await catService.getBreeds(3, 12);
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:3000/breeds?_limit=3&_page=12"
      );
    });
  });
});
