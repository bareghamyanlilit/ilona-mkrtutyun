"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./music";
import {
  anim,
  day,
  month,
  txt1,
  txt1Title,
  txt3,
  txt4,
} from "@/data/data";
import { motion } from "framer-motion";
import { Footer } from "./footer";
import { TimeBox } from "./TimeBox";
import { Program } from "./Program";
import AttendanceGuests from "./RSVP";

export function Home() {
  const [openEnvelope, setOpenEnvelope] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (openEnvelope) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [openEnvelope]);

  return (
    <div
      className={`${openEnvelope ? "" : "relative h-dvh"} FontArTarumianBarakU tracking-[20%] text-center overflow-hidden text-vrayi `}
    >
      <div
        className={` bg-guyn ${openEnvelope ? "animate-bounceYB" : ""} z-51 w-[160vw] h-[160vw] rounded-4xl absolute left-1/2 top-[0%]  -translate-x-1/2 -translate-y-1/2 rotate-45  shadow-2xl `}

      ></div>
      <div
        className={` bg-guyn ${openEnvelope ? "animate-bounceYT" : ""}  z-50 w-[160vw] h-[160vw] rounded-4xl absolute left-1/2 -bottom-[60%] -translate-x-1/2 -translate-y-1/2 rotate-45  `}
      ></div>
      <img
        src="/forenvelope.png"
        alt="envelop"
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "opacity-0" : ""} object-cover transition-all duration-100  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  cursor-pointer  md:w-50 md:h-50 z-60 w-50 h-50 `}
      />

      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 p-1  rounded-[20px] bg-guyn  right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <Image
            src="/icon2.png"
            alt="icon1"
            width={500}
            height={500}
            className=" w-full p-2 object-contain "
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div className="  bg-cover bg-center m-auto max-w-md w-full h-max" style={{ backgroundImage: `url("/bg.png")` }}>

        <div className=" rounded-b-[220px] px-10 py-50 grid gap-8 w-full h-[90dvh] bg-cover  bg-no-repeat " style={{ backgroundImage: `url("/img1.jpg")` }}>
          <motion.h2 {...anim} className="FontArmHmk text-2xl font-bold">
            {txt1Title}
          </motion.h2>
          <motion.p {...anim} className=" text-2xl ">
            {txt1}
          </motion.p>
          <motion.h2 {...anim} className="FontArmHmk text-8xl font-bold ">
            {day}
          </motion.h2>
          <motion.p {...anim} className="font-bold text-2xl ">
            {month}
          </motion.p>
        </div>

        <div className="px-5 pt-20">
          <div className="py-15 overflow-hidden bg-[#fffffffb] rounded-[220px]">
            <div className=" px-10 flex flex-col items-center justify-center gap-10">

              <motion.div {...anim} className="w-full">

                <Image
                  src="/img2.jpg"
                  alt="zinvor"
                  width={500}
                  height={500}
                  className="w-full object-cover rounded-[220px]"
                />
              </motion.div>

              <TimeBox />
            </div>

            <Program />
          </div>

          <AttendanceGuests />

          <motion.p {...anim} className="mt-10 font-bold text-2xl px-5 ">
            {txt4}
          </motion.p>
          <div className="relative">

            <div className="px-10  py-20">
              <Image
                src="/img3.jpg"
                width={500}
                height={500}
                alt="jamanak"
                className=" object-cover relative z-10"
              />
            </div>
            <div className="w-full absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-50 bg-guyn "></div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}
