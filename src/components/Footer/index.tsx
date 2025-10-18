import Logo from "@/assets/Logo.png";
import { footerLinks } from "@/utils/footerLinks";
import { Link } from "react-scroll";
import { baseMotion, slideUp, withDelay } from "@/utils/motionPresets";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 flex flex-col md:flex-row gap-16 md:justify-between">
        <motion.div
          {...baseMotion}
          custom={0}
          transition={withDelay(0)}
          variants={slideUp}
          className="mt-16 basis-1/2 md:mt-0"
        >
          <img className="w-32" src={Logo} alt="" />
          <p className="my-5 text-sm text-gray-600">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p className="text-sm text-gray-500">
            © Nikita Sedov All Rights Reserved.
          </p>
        </motion.div>
        <motion.div
          {...baseMotion}
          custom={1}
          transition={withDelay(1)}
          variants={slideUp}
          className="mt-16 basis-1/4 md:mt-0"
        >
          <h4 className="font-bold text-lg">Links</h4>
          {footerLinks && footerLinks.length > 0 && (
            <div className="flex gap-2 flex-col mt-3">
              {" "}
              {footerLinks.map((item, idx) => (
                <Link
                  className="text-sm cursor-pointer text-gray-700 hover:text-primary-500 animate"
                  key={idx}
                  to={item.link}
                >
                  {item.label}
                </Link>
              ))}{" "}
            </div>
          )}
        </motion.div>
        <motion.div
          {...baseMotion}
          custom={3}
          transition={withDelay(3)}
          variants={slideUp}
          className="mt-16 basis-1/4 md:mt-0"
        >
          <h4 className="font-bold text-lg">Contact Us</h4>
          <p className="my-3 text-gray-700 text-sm">
            Tempus metus mattis risus volutpat egestas.
          </p>
          <a
            href="tel:3334256825"
            className="text-sm text-gray-700 hover:text-primary-500 transition duration-300 block"
          >
            (333)425-6825
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
