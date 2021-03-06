import { mount } from "@vue/test-utils";
import LoadingComponent from "@/components/LoadingComponent.vue";

describe("LoadingComponent.vue", () => {
  test("renders svg", () => {
    const wrapper = mount(LoadingComponent);
    expect(wrapper.find("svg").exists()).toBe(true);
  });
});
