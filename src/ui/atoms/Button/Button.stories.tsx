import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";

import Button from "./Button";

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: "Hello",
    onClick: fn(),
  },
};

export default {
  title: "UI/Atoms/Button",
  component: Button,
} as Meta<typeof Button>;
