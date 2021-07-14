import { mount } from "@vue/test-utils";
import BreedComponent from "@/components/BreedComponent/BreedComponent.vue";

describe("BreedComponent.vue", () => {
  test("renders props.catData when passed", () => {
    const catData = {
      breed: "Korat",
      coat: "Short",
      country: "Thailand",
      origin: "Natural",
      pattern: "Solid",
    };

    const wrapper = mount(BreedComponent, {
      props: { catData },
    });

    expect(wrapper.find(".data").text()).toMatch(
      catData.breed
    );
    expect(wrapper.findAll(".data")[1].text()).toMatch(
      catData.country
    );
  });
});
