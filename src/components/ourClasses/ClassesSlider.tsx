import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import {
  baseMotion,
  slideLeft,
  withDelay,
  sliderDelay,
} from "@/utils/motionPresets";

import { classesData } from "@/utils/classesData";
import type { ClassesType } from "@/types/type";
import ClassCard from "./ClassCard";

const ClassesSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={true}
      pagination={{ clickable: true }}
      loop={true}
      className="px-4"
      breakpoints={{
        0: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
        1440: { slidesPerView: 2 },
        1650: { slidesPerView: 3 },
      }}
    >
      {classesData.map((item: ClassesType, index: number) => (
        <SwiperSlide
          className="flex items-center justify-center"
          key={`${item.title} - ${index} `}
        >
          <motion.div
            {...baseMotion}
            transition={sliderDelay(index)}
            variants={slideLeft}
          >
            {" "}
            <ClassCard
              title={item.title}
              description={item.description}
              image={item.image}
            />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClassesSlider;
