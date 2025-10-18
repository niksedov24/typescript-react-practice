import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ContactFormType } from "@/utils/contactSchema";
import { contactSchema } from "@/utils/contactSchema";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import TextInput from "../formElements/Textinput";
import Heading from "@/utils/Heading";
import { error } from "console";

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

  const onSubmit = (data: ContactFormType) => {
    console.log("Form submitted with data ", data);
    setTimeout(() => {
      alert("Thank you for your message");
      reset();
    }, 1000);
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <div className="md:w-3/5">
        <Heading>
          {" "}
          <span className="text-primary-500">JOIN NOW</span>
          TO GET IN SHAPE
        </Heading>
        <p className="my-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
          assumenda consectetur deleniti quaerat cumque quidem iusto possimus
          maxime ipsum iure mollitia laboriosam sunt qui voluptas sed delectus
          nulla omnis eius.
        </p>
      </div>
      <div className="mt-10 justify-between gap-8 md:flex">
        <div className="mt-10 basis-3/5 md:mt-0">
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
