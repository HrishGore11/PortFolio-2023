import Link from "next/link";
import React, { ReactNode, useEffect } from "react";
import { CustomLink } from "./Header";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion, useScroll, useTransform } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  organization: string;
  skills: string;
  message: string;
};

const Contact: ReactNode = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData);
    window.location.href = `mailto:hrishikesh1494@gmail?subject=${formData.skills}&body=hi,my name is ${formData.name} from ${formData.organization}. ${formData.message} (${formData.email})`;
  };

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);
  // useEffect(() => {
  //   // const button = document.getElementById("myButton") as HTMLElement;

  //   // button.style.transform = `translateX(${scrollYProgress}px)`;

  //   // });
  //   console.log(scrollYProgress);
  // }, [scrollYProgress]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-[#1c1d20] text-white"
    >
      <div className="w-full h-full justify-between max-w-7xl mx-auto  overflow-hidden">
        <div className=" justify-center m-24">
          {/* <div
            className="font-[450] text-8xl flex flex-col basis-[70%]"
            // drag
            // dragConstraints={constraintsRef}
            // dragSnapToOrigin
            // dragElastic={0.2}
          >
            <h1 className="font-[350]">Let's work</h1>
            <h1 className="font-[350]">together</h1>
          </div>
          <div className="font-[350]  text-8xl basis-[30%] "></div> */}
          <motion.h3
            initial={{
              //   x: -400,
              opacity: 0,
            }}
            whileInView={{
              //   x: 0,
              opacity: 1,
            }}
            transition={{ duration: 1.5 }}
            className="text-center  uppercase tracking-[20px] text-7xl font-[450] leading-normal"
          >
            Let&apos;s Work Together
          </motion.h3>
        </div>
        <div className=" mx-28 my-20 flex flex-row">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col basis-[70%]"
          >
            <div>
              <hr className="my-3 mr-5 border-[#5d5e60]" />
              <div className="flex flex-row">
                <div className="text-[#5d5e60] font-[650] text-md my-8">01</div>
                <div className="my-5 mx-10">
                  <div className="text-2xl my-2">What&apos;s your Name?</div>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="John Doe *"
                    className="bg-[#1c1d20] text-2xl my-2 outline-none"
                  />
                </div>
              </div>
            </div>
            <div>
              <hr className="my-3  mr-5 border-[#5d5e60]" />
              <div className="flex flex-row">
                <div className="text-[#5d5e60] font-[650] text-md my-8">02</div>
                <div className="my-5 mx-10">
                  <div className="text-2xl my-2">What&apos;s your email?</div>
                  <input
                    {...register("email")}
                    type="text"
                    placeholder="johndoe@gmail.com"
                    className="bg-[#1c1d20] text-2xl my-2 outline-none"
                  />
                </div>
              </div>
            </div>
            <div>
              <hr className="my-3  mr-5 border-[#5d5e60]" />
              <div className="flex flex-row">
                <div className="text-[#5d5e60] font-[650] text-md my-8">03</div>
                <div className="my-5 mx-10">
                  <div className="text-2xl my-2">
                    What&apos;s the name of your organization?
                  </div>
                  <input
                    {...register("organization")}
                    type="text"
                    placeholder="John & Doe &#174;"
                    className="bg-[#1c1d20] text-2xl my-2 outline-none"
                  />
                </div>
              </div>
            </div>
            <div>
              <hr className="my-3  mr-5 border-[#5d5e60]" />
              <div className="flex flex-row">
                <div className="text-[#5d5e60] font-[650] text-md my-8">04</div>
                <div className="my-5 mx-10">
                  <div className="text-2xl my-2">
                    What skills are you looking for?
                  </div>
                  <input
                    type="text"
                    {...register("skills")}
                    placeholder="Web Development"
                    className="bg-[#1c1d20] text-2xl my-2 outline-none"
                  />
                </div>
              </div>
            </div>
            <div>
              <hr className="my-3  mr-5 border-[#5d5e60]" />
              <div className="flex flex-row">
                <div className="text-[#5d5e60] font-[650] text-md my-8">05</div>
                <div className="my-5 mx-10">
                  <div className="text-2xl my-2">Your message</div>
                  <textarea
                    rows={9}
                    cols={50}
                    {...register("message")}
                    placeholder="Hello Hrishikesh, We are ..."
                    className="bg-[#1c1d20] text-2xl outline-none my-2"
                  />
                </div>
              </div>
            </div>
            <hr className="my-3  mr-5 border-[#5d5e60]" />
            <div>
              <motion.button
                type="submit"
                style={{ x: x }}
                className="bg-[#5abbc1] h-32 w-32 rounded-full transition-all duration-[2000] ease-in-out"
              >
                Send
              </motion.button>
              {/* <motion.button
                id="myButton"
                style={{
                  position: "absolute",
                  top: "50%",
                  // left: 0,
                  x: scrollYProgress,
                }}
                transf
              >
                Button
              </motion.button> */}
            </div>
          </form>
          <div className="basis-[30%] px-10 flex flex-col">
            <div className="uppercase text-sm text-[#5d5e60] font-[650] ">
              Contact Details
            </div>
            <div>
              <div className="flex items-center space-x-5">
                <EnvelopeIcon className="text-[#5abbc1] h-5 w-5 animate-pulse" />
                <p className="text-lg font[650] my-3">hrishgore11@gmail.com</p>
              </div>
              <div className="flex items-center space-x-5 ">
                <PhoneIcon className="text-[#5abbc1] h-5 w-5 animate-pulse" />
                <p className="text-lg font[650] my-3">+91 9158551076</p>
              </div>
              <div className="flex items-center space-x-5">
                <MapPinIcon className="text-[#5abbc1] h-5 w-5 animate-pulse" />
                <p className="text-lg font[650] my-3">
                  Pune, Maharashtra, India
                </p>
              </div>
            </div>
            <div className="uppercase text-sm text-[#5d5e60] font-[650] mt-10 ">
              Socials
            </div>
            <div className="my-2">
              <div className="my-3">
                <CustomLink
                  href="https://github.com/HrishGore11"
                  className="text-lg font[650] relative group"
                  title="GitHub"
                  spanClassName="absolute w-full h-[2px] opacity-0 left-0 transform  bg-white -bottom-1  group-hover:scale-100 group-hover:opacity-100 rounded-full transition-all easeOut duration-300 delay-100"
                />
              </div>
              <div className="my-3">
                <CustomLink
                  href="https://github.com/HrishGore11"
                  className="text-lg font[650] relative group justify-center"
                  spanClassName="absolute w-full h-[2px] opacity-0 left-0 transform  bg-white -bottom-1  group-hover:scale-100 group-hover:opacity-100 rounded-full transition-all easeOut duration-300 delay-100"
                  title="LinkedIn"
                />
              </div>
              <div className="my-3">
                <CustomLink
                  href="https://github.com/HrishGore11"
                  title="Instagram"
                  spanClassName="absolute inline-block w-full h-[2px] opacity-0 left-0 transform  bg-white -bottom-1  group-hover:scale-100 group-hover:opacity-100 rounded-full transition-all easeOut duration-300 delay-100"
                  className="text-lg font[650] relative group justify-center"
                />
              </div>
              <div className="my-3">
                <CustomLink
                  href="https://github.com/HrishGore11"
                  title="Facebook"
                  spanClassName="absolute inline-block w-full h-[2px] opacity-0 left-0 transform  bg-white -bottom-1  group-hover:scale-100 group-hover:opacity-100 rounded-full transition-all easeOut duration-300 delay-100"
                  className="text-lg font[650] relative group justify-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
