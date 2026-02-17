import { cva } from "class-variance-authority";
import { createElement } from "react";

const textVariants = cva("", {
  variants: {
    size: {
      "display-sm": "text-3xl font-bold",
      "display-md": "text-4xl font-bold",
      "display-lg": "text-5xl font-bold",
      "headline-sm": "text-xl font-semibold",
      "headline-md": "text-2xl font-semibold",
      "headline-lg": "text-3xl font-semibold",
      "title-sm": "text-lg font-medium",
      "title-md": "text-xl font-medium",
      "title-lg": "text-2xl font-medium",
      "body-sm": "text-sm",
      "body-md": "text-base",
      "body-lg": "text-lg",
      "caption-sm": "text-xs",
      "caption-md": "text-sm",
      "caption-lg": "text-base",
      "button-sm": "text-xs uppercase tracking-wide font-medium",
      "button-md": "text-sm uppercase tracking-wide font-medium",
      "button-lg": "text-base uppercase tracking-wide font-medium",
    },
    tone: {
      base: "text-zinc-100",
      rest: "text-zinc-400",
      muted: "text-zinc-500",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    size: "body-md",
    tone: "base",
    align: "left",
  },
});

export default function Text({
  as = "span",
  size,
  tone,
  align,
  children,
  className,
  ...props
}) {
  return createElement(
    as,
    {
      className: textVariants({ size, tone, align }, className),
      ...props,
    },
    children,
  );
}
