import React, { ReactNode } from "react";
import cn from "classnames";
import "../src/styles/styles.css";
import "../src/styles/tailwind.css";
import "@fontsource/inter";

interface IStoryArgs {
  darkMode: boolean;
  className?: string;
  children?: ReactNode;
  noPadding?: boolean;
}

const StoryLayout = ({
  darkMode,
  className,
  children,
  noPadding,
}: IStoryArgs) => (
  <div className={cn({ "dark bg-gray-900": darkMode }, "-m-4")}>
    <div className={cn(className, { "p-4": !noPadding })}>{children}</div>
  </div>
);

export default StoryLayout;
