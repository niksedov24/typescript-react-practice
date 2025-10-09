import type { benefitType } from "@/types/type";
import { HiHomeModern, HiMiniUserGroup, HiAcademicCap } from "react-icons/hi2";

export const benefits: Array<benefitType> = [
  {
    icon: <HiHomeModern className="h-6 w-6" />,
    title: "State  of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in  lectus  pellentesque Ullamcorper et.",
  },
  {
    icon: <HiMiniUserGroup className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in  lectus  pellentesque Ullamcorper et.",
  },
  {
    icon: <HiAcademicCap className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in  lectus  pellentesque Ullamcorper et.",
  },
];
