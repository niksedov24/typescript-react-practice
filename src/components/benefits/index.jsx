import React from "react";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
import ActionButton from "@/utils/ActionButton";
import Heading from "@/utils/Heading";
import { benefits } from "@/utils/benefitData";
import Benefit from "../benefits/Benefit";

const Benefits = () => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div className="md:my-5 md:w-3/5">
        <Heading>MORE THAN JUST GYM.</Heading>
        <p className="my-5 text-sm">
          We provide world class fitness equipment, trainers and class get you
          to your ultimate fitness goals with easy. We provide care into each
          and every member{" "}
        </p>
      </motion.div>

      <motion.div className="mt-5 items-center justify-between gap-8 md:flex">
        {benefits.map((benefit) => (
          <Benefit key={benefit.title} {...benefit} />
        ))}
      </motion.div>
      <motion.div className="mt-16 md:mt-28 md:flex items-center justify-between gap-20">
        <motion.div className="flex-1">
          <img className="mx-auto" src={BenefitsPageGraphic} alt="Benefit" />
        </motion.div>
        <motion.div className="flex-1 relative">
          <div className="before:absolute hidden md:block before:-left-20 before:-top-20 before:z-[1] before:content-(--content-abstractwaves) ">
            <Heading>
              MILLIONS OF HAPPY MEMBERS GETTING{" "}
              <span className="text-primary-500">FIT</span>
            </Heading>
          </div>
          <div className="">
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, tempora voluptate! Voluptate reprehenderit amet sint
              necessitatibus deleniti aperiam ipsam, officiis nemo illum itaque
              placeat, at error debitis. A, quidem rem.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              iure in provident, sed necessitatibus officia soluta! Expedita
              est, adipisci a ab veniam perferendis id fugit illo, saepe et sed
              dolorem.
            </p>
          </div>
          <div className="flex flex-wrap  mt-16 justify-center  md:justify-between items-center gap-8">
            <ActionButton variant="button">Join Now</ActionButton>
            <div className=" relative before:z-[-1] before:content-(--content-sparkles)"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
