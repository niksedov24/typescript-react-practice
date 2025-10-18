import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ContactFormType } from "@/utils/contactSchema";
import { contactSchema } from "@/utils/contactSchema";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import TextInput from "../formElements/Textinput";
import Heading from "@/utils/Heading";
import { motion } from "framer-motion";
import { baseMotion, slideLeft, slideRight } from "@/utils/motionPresets";
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: ContactFormType) => {
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/valera.sedov99@mail.ru",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.success === "true") {
        reset();
      } else {
        console.error("FormSubmit response:", result);
      }
    } catch (error) {
      console.log("Error submitted form", error);
    }
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        {...baseMotion}
        transition={{ duration: 0.5 }}
        variants={slideLeft}
        className="md:w-3/5"
      >
        <Heading>
          {" "}
          <span className="text-primary-500">JOIN NOW</span>
          TO GET IN SHAPE
        </Heading>
        <p className="my-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elitt. Unde,
          assumenda consectetur deleniti quaerat cumque quidem iusto possimus
          maxime ipsum iure mollitia laboriosam sunt qui voluptas sed delectus
          nulla omnis eius.
        </p>
      </motion.div>
      <div className="mt-10 justify-between gap-8 md:flex">
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.5 }}
          variants={slideLeft}
          className="mt-10 basis-3/5 md:mt-0"
        >
          <form className="relative z-[2]" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              placeholder="Your Name"
              register={register("name")}
              error={errors.name}
            />
            <TextInput
              type="email"
              placeholder="Your Email"
              register={register("email")}
              error={errors.email}
            />
            <TextInput
              className="resize-none"
              type="textarea"
              placeholder="Your Message"
              register={register("message")}
              error={errors.message}
            />
            <button
              className="cursor-pointer mt-5 rounded-lg bg-secondary-500 px-20 py-3 animate hover:text-white"
              type="submit"
            >
              Submit
            </button>
            {isSubmitSuccessful && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-green-600 text-center font-semibold"
              >
                Your message has been sent successful{" "}
              </motion.p>
            )}
          </form>
        </motion.div>
        <div className="mt-10 basis-2/5 md:mt-0">
          <motion.div
            {...baseMotion}
            transition={{ duration: 0.5 }}
            variants={slideRight}
            className="w-full  relative before:absolute before:-bottom-20  before:-right-10 before:z-[1] md:before:content-(--content-evolvetext) "
          >
            <img
              className="w-full relative z-[2] "
              src={ContactUsPageGraphic}
              alt="ContactUs"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
