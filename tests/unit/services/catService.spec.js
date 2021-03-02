import CatService from "../../../src/services/catService";

describe("#catService", () => {
  const catService = new CatService();

  describe("#get breed", () => {
    test("calls the API with the default query params", async () => {
      global.fetch = jest
        .fn()
        .mockImplementation(() => Promise.resolve({ json: () => {} }));

      await catService.getBreeds();
      expect(global.fetch).toHaveBeenCalledWith(
        "https://catfact.ninja/breeds?limit=1&page=1"
      );
    });

    test("calls the API with the correct query params", async () => {
      global.fetch = jest
        .fn()
        .mockImplementation(() => Promise.resolve({ json: () => {} }));

      await catService.getBreeds(3, 12);
      expect(global.fetch).toHaveBeenCalledWith(
        "https://catfact.ninja/breeds?limit=3&page=12"
      );
    });
  });
});
