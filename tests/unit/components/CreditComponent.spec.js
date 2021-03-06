import { mount } from "@vue/test-utils";
import CreditComponent from "@/components/CreditComponent.vue";

describe("CreditComponent.vue", () => {
  test("renders props.name when passed", () => {
    const name = "Carsten Behrens";
    const wrapper = mount(CreditComponent, {
      props: { name },
    });
    expect(wrapper.text()).toMatch(name);
  });

  test("renders props.prefix when passed", () => {
    const prefix = "Created by";
    const wrapper = mount(CreditComponent, {
      props: { prefix },
    });
    expect(wrapper.text()).toMatch(prefix);
  });

  test("renders props.suffix when passed", () => {
    const suffix = "on Unsplash.";
    const wrapper = mount(CreditComponent, {
      props: { suffix },
    });
    expect(wrapper.text()).toMatch(suffix);
  });

  test("renders all props in correct order with correct spacing", () => {
    const prefix = "Created by";
    const name = "Carsten Behrens";
    const suffix = "on Unsplash.";
    const wrapper = mount(CreditComponent, {
      props: { suffix, name, prefix },
    });

    const expected = String(`${prefix} ${name} ${suffix}`);
    expect(wrapper.text()).toEqual(expected);
  });
});
