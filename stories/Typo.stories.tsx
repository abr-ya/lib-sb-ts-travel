import React from "react";
import { Meta, Story } from "@storybook/react";
import StoryLayout from "./StoryLayout";

import Typo, { ITypo } from "../src/components/Typo";
import { Figma } from "../src/data";

const meta: Meta = {
  title: "Typo",
  component: Typo,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.Typography,
    },
  },
};

export default meta;

interface Props extends ITypo {
  darkMode: boolean;
}

const TypoHeadings: Story<Props> = (args) => (
  <StoryLayout {...args} className="space-y-2">
    <Typo {...args} variant="h1" customColor="text-primary-700">
      Title H1
    </Typo>
    <Typo {...args} variant="h2">
      Title H2
    </Typo>
    <Typo {...args} variant="h3">
      Title H3
    </Typo>
    <Typo {...args} variant="h4">
      Title H4
    </Typo>
    <Typo {...args} variant="h5">
      Title H5
    </Typo>
    <Typo {...args} variant="h6">
      Title H6
    </Typo>
  </StoryLayout>
);

export const Heading = TypoHeadings.bind({});

Heading.args = {
  customWeight: "regular",
  className: "",
  darkMode: false,
};

Heading.parameters = {
  controls: { exclude: ["variant", "customColor", "className"] },
};

const TypoText: Story<Props> = (args) => (
  <StoryLayout {...args} className="space-y-2">
    <Typo {...args} variant="xl">
      Text xl
    </Typo>
    <Typo {...args} variant="lg">
      Text lg
    </Typo>
    <Typo {...args} variant="md">
      Text md
    </Typo>
    <Typo {...args} variant="sm">
      Text sm
    </Typo>
    <Typo {...args} variant="xs">
      Text xs
    </Typo>
  </StoryLayout>
);

export const Text = TypoText.bind({});

Text.args = {
  customWeight: "regular",
  className: "",
  darkMode: false,
};

Text.parameters = {
  controls: { exclude: ["variant", "customColor", "className"] },
};

const TypoDynamic: Story<Props> = (args) => {
  const isHeading = args.variant.startsWith("h");

  return (
    <StoryLayout {...args} className="space-y-2">
      <Typo {...args}>
        {isHeading ? "Title" : "Text"} {args.variant} <br /> {args.customWeight}
      </Typo>
    </StoryLayout>
  );
};

export const Dynamic = TypoDynamic.bind({});

Dynamic.args = {
  variant: "h1",
  customColor: "text-primary-600", //text-primary-600 dark:text-white
  customWeight: "regular",
  className: "",
  darkMode: false,
};
