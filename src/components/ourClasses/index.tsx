import Heading from "@/utils/Heading";
import ClassesSlider from "./ClassesSlider";

const OurClasses = () => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <div className="mx-auto w-5/6">
        <div className="md:w-3/5">
          <Heading>OUR CLASSES</Heading>
          <p className="py-5 text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            doloribus alias error repudiandae eaque voluptatibus consequatur
            nulla? Veniam, hic incidunt eveniet dolores sint, provident
            asperiores suscipit culpa iusto, doloremque iure.
          </p>
        </div>
      </div>
      <div className="mt-10 w-full">
        <ClassesSlider />
      </div>
    </section>
  );
};

export default OurClasses;
