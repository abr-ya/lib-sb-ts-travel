import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, {IButton} from "../src/components/Button";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  // argTypes: { handleClick: { action: "handleClick" } },
}

export default meta;

export const Red = () => (
  <Button
    backgroundColor="red"
    label="Press Me"
    size="md" 
    handleClick={() => console.log("click")} 
  />
);

// export const Green = Template.bind({})
// Green.args = {
//   backgroundColor: "green",
//   label: "Press Me",
//   size: "md",
// }

// export const Small = Template.bind({})
// Small.args = {
//   backgroundColor: "red",
//   label: "Press Me",
//   size: "sm",
// }

// export const Large = Template.bind({})
// Large.args = {
//   backgroundColor: "red",
//   label: "Press Me",
//   size: "lg",
// }

// export const LongLabel = Template.bind({})
// LongLabel.args = {
//   backgroundColor: "red",
//   label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
//   size: "md",
// }
