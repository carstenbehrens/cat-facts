import { mount } from "@vue/test-utils";
import ImageComponent from "@/components/ImageComponent.vue";

describe("ImageComponent.vue", () => {
  test("renders image correctly when passed the correct props", () => {
    const alt = "white and gray cat";
    const height = 3456;
    const src = "https://images.unsplash.com/photo-1472491235688-bdc81a63246e";
    const width = 5184;

    const wrapper = mount(ImageComponent, {
      props: { alt, height, src, width },
    });

    const image = wrapper.find("img");

    expect(image.attributes("alt")).toBe(alt);
    expect(image.attributes("height")).toBe(String(height));
    expect(image.attributes("src")).toBe(src);
    expect(image.attributes("width")).toBe(String(width));
  });
});
