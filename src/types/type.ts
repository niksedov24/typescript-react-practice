export type TSectionID = "home" | "benefits" | "ourclasses" | "contactus";

export const navLinks: { id: TSectionID; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "benefits", label: "benefits" },
  { id: "ourclasses", label: "ourclasses" },
  { id: "contactus", label: "contactus" },
];
