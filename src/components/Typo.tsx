import React, { FC, ReactNode } from "react";
import cn from "classnames";

type TypoVariant =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "h6"
  | "h5"
  | "h4"
  | "h3"
  | "h2"
  | "h1";

type TypoWeight = "regular" | "medium" | "semibold" | "bold";
type TypoFont = "font-normal" | "font-medium" | "font-semibold" | "font-bold";

export interface ITypo {
  variant: TypoVariant;
  customColor?: string;
  customWeight?: TypoWeight;
  className?: string;
  children: string | ReactNode;
}

const TypoVariantClasses: Record<TypoVariant, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  h6: "text-h6",
  h5: "text-h5",
  h4: "text-h4",
  h3: "text-h3",
  h2: "text-h2",
  h1: "text-h1",
};

const TypoWeightClasses: Record<TypoWeight, TypoFont> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const Typo: FC<ITypo> = ({
  variant = "md",
  customColor,
  customWeight = "regular",
  className,
  children,
}) => {
  const TypoVariantCn = TypoVariantClasses[variant];
  const TypoWeightCn = TypoWeightClasses[customWeight];

  const isHeading = variant.startsWith("h");
  // h* or p
  const Component = (isHeading ? variant : "p") as keyof JSX.IntrinsicElements;

  return (
    <Component
      className={cn(
        TypoVariantCn,
        TypoWeightCn,
        className,
        {
          ["tracking-tight"]: ["h1", "h2", "h3"].includes(variant),
          ["text-gray-900 dark:text-white"]: !customColor,
        },
        customColor,
      )}
    >
      {children}
    </Component>
  );
};

export default Typo;
