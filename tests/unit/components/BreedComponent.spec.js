import { mount } from "@vue/test-utils";
import BreedComponent from "@/components/BreedComponent.vue";

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

    expect(wrapper.find(".breed-container__entry").text()).toMatch(
      catData.breed
    );
    expect(wrapper.findAll(".breed-container__entry")[1].text()).toMatch(
      catData.country
    );
  });
});
