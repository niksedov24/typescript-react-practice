import type { JSX } from "react";

export type TSectionID = "home" | "benefits" | "ourclasses" | "contactus";

export const navLinks: { id: TSectionID; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "benefits", label: "benefits" },
  { id: "ourclasses", label: "ourclasses" },
  { id: "contactus", label: "contactus" },
];

export type benefitType = {
  icon?: JSX.Element;
  title: string;
  description: string;
};

export type ClassesType = {
  title: string;
  description?: string;
  image: string;
};
