import { NavigateSideBar } from "./navigate-sb";
import type { Meta, StoryObj } from "@storybook/react";
import {
  CANDIDATESIDEBARTITLE,
  RECRUITERSIDEBARTITLE,
  SETTINGSIDEBARTITLE,
} from "@/consts";
import {
  CANDIDATESIDEBARICON,
  RECRUITERSIDEBARICON,
  SETTINGSIDEBARICON,
} from "@/consts";

const meta: Meta<typeof NavigateSideBar> = {
  title: "UI/NavigateSideBar",
  component: NavigateSideBar,
  args: {
    titles: RECRUITERSIDEBARTITLE,
    icons: RECRUITERSIDEBARICON,
  },
};
export default meta;

type Story = StoryObj<typeof NavigateSideBar>;

export const Setting: Story = {
  args: {
    titles: SETTINGSIDEBARTITLE,
    icons: SETTINGSIDEBARICON,
  },
};

export const Recruiter: Story = {
  args: {
    titles: RECRUITERSIDEBARTITLE,
    icons: RECRUITERSIDEBARICON,
  },
};

export const Candidate: Story = {
  args: {
    titles: CANDIDATESIDEBARTITLE,
    icons: CANDIDATESIDEBARICON,
  },
};
