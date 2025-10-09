import React from "react";
import type { benefitType } from "@/types/type";
import { motion } from "framer-motion";
import ActionButton from "@/utils/ActionButton";

type BenefitProps = benefitType;

const Benefit = ({ icon, title, description }: BenefitProps) => {
  return (
    <motion.div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100  bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold"> {title} </h4>
      <p className="my-3"> {description} </p>
      <ActionButton
        className="animate  text-sm font-bold text-primary-500 underline cursor-pointer hover:text-secondary-500"
        variant="link"
        to="contactus"
      >
        Learn More
      </ActionButton>
    </motion.div>
  );
};

export default Benefit;
