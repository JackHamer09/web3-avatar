import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";

import Avatar from "@/components/Avatar.vue";

describe("Avatar", () => {
  it("properly mounts", async () => {
    const wrapper = mount(Avatar, {
      props: {
        address: "0x11Ed0AC7D6142481E459B6e5d4bfB5646277796f"
      },
    });
    expect(wrapper).toBeTruthy();
  });
});
