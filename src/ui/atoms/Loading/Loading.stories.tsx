import type { Meta, StoryObj } from "@storybook/react";

import Loading from "./Loading";

export const Primary: StoryObj<typeof Loading> = {
  args: {},
};

export default {
  title: "UI/Loading",
  component: Loading,
} as Meta<typeof Loading>;
