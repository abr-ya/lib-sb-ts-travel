import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import StoryLayout from "./StoryLayout";

import ButtonGroup, { IButtonGroup } from "../src/components/ButtonGroup";
import { Figma, options1, options2 } from "../src/data";
import { FiGrid, FiList } from "react-icons/fi";

const meta: Meta = {
  title: "ButtonGroup",
  component: ButtonGroup,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.ButtonGroup,
    },
  },
};

export default meta;

interface Props extends IButtonGroup<string> {
  darkMode: boolean;
}

const StoryButtonGroup: Story<Props> = (args) => {
  const [activeItem1, setActiveItem1] = useState<string>(options1[1].value);
  const [activeItem2, setActiveItem2] = useState<string>(options2[1].value);

  type ViewOption = "list" | "grid";
  const [viewOption, setViewOption] = useState<ViewOption>("list");

  return (
    <StoryLayout {...args} className="space-y-4">
      <div>
        <ButtonGroup
          {...args}
          active={activeItem1}
          setActive={setActiveItem1}
          options={options1}
        />
      </div>
      <div>
        <ButtonGroup
          {...args}
          active={activeItem2}
          setActive={setActiveItem2}
          options={options2}
        />
      </div>
      {/* подозрительно всё завешивает */}
      <div>
        <ButtonGroup
          active={viewOption}
          options={[
            {
              //content: <FiList size={20} />,
              content: "list_temp",
              value: "list",
            },
            {
              // content: <FiGrid size={20} />,
              content: "grid_temp",
              value: "grid",
            },
          ]}
          setActive={setViewOption}
        />
      </div>
    </StoryLayout>
  );
};

export const Default = StoryButtonGroup.bind({});

Default.args = {
  darkMode: false,
};

Default.parameters = {
  controls: { exclude: ["active", "setActive", "options"] },
};
