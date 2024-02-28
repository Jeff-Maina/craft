"use client";

import { motion } from "framer-motion";
import { gsap } from "gsap";

import ElementLayout from "../../../ElementLayout";
import { tabs } from "./codeblock";
import { MouseEvent, useRef, useState } from "react";

//animation variants;

const modalVariants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.4,
      },
    },
  },
  inactive: {
    opacity: 0,
    transition: {
      opacity: {
        duration: 0.4,
      },
    },
  },
};

// data
const images = [
  {
    album: "TNS",
    imagePath:
      "https://i.pinimg.com/564x/90/de/31/90de3139a6919bd1a8ae6da4600d9058.jpg",
  },
  {
    album: "DAMN",
    imagePath:
      "https://i.pinimg.com/564x/68/b2/be/68b2be79042b3bd6a897541f90e2a2b8.jpg",
  },
  {
    album: "IGOR",
    imagePath:
      "https://i.pinimg.com/564x/90/45/5c/90455cccbb3ac2293e7b0b4276b9ecb9.jpg",
  },
];

const dependencies = [
  {
    label: "Framer Motion",
    command: "npm install framer-motion",
  },
  {
    label: "GSAP",
    command: "npm install gsap",
  },
];

const Link014 = () => {
  const [isLinkHovered, setLinkHovered] = useState(false);
  const hoverLink: () => void = () => setLinkHovered(true);
  const unhoverLink: () => void = () => setLinkHovered(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    const modal = modalRef.current;
    const parent = parentRef.current;
    if (!modal || !parent) return;

    const xTo = gsap.quickTo(modal, "x", {
      duration: 1,
      ease: "power3",
    });
    const yTo = gsap.quickTo(modal, "y", {
      duration: 1,
      ease: "power3",
    });

    const { top, left, width, height } = parent.getBoundingClientRect();

    const x = clientX - (left + 176 / 2);
    const y = clientY - (top + 200);

    xTo(x);
    yTo(y);
  };

  const [activeImage, setActiveImage] = useState("");

  return (
    <ElementLayout dependencies={dependencies} tabs={tabs}>
      <div
        ref={parentRef}
        onMouseMove={handleMouseMove}
        className="relative px-6 md:text-xl !leading-relaxed text-neutral-600 isolate"
      >
        <p>
          Occaecat aliquip sit minim duis ea. Fugiat{" "}
          <a
            href="#"
            onMouseEnter={() => {
              hoverLink();
              setActiveImage("TNS");
            }}
            onMouseLeave={unhoverLink}
            className="text-yellow-700 underline underline-offset-2  decoration-yellow-500"
          >
            The Never Story
          </a>{" "}
          culpa magna non culpa id id et. Nisi deserunt officia ut ex sunt ad{" "}
          <a
            href="#"
            onMouseEnter={() => {
              hoverLink();
              setActiveImage("DAMN");
            }}
            onMouseLeave={unhoverLink}
            className="text-red-800 decoration-red-500 underline underline-offset-2"
          >
            {" "}
            DAMN
          </a>{" "}
          ullamco laborum non{" "}
          <a
            href="#"
            onMouseEnter={() => {
              hoverLink();
              setActiveImage("IGOR");
            }}
            onMouseLeave={unhoverLink}
            className="text-pink-800 decoration-pink-500 underline underline-offset-2"
          >
            {" "}
            IGOR
          </a>{" "}
          .
        </p>
        {/* modal */}
        <motion.div
          ref={modalRef}
          variants={modalVariants}
          initial="initial"
          animate={isLinkHovered ? "active" : "inactive"}
          className="absolute size-44 inset-0 bg-black"
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.imagePath}
              className={`absolute inset-0 w-full h-full object-cover ${
                activeImage === image.album ? "opacity-100" : "opacity-0"
              }`}
              alt=""
            />
          ))}
        </motion.div>
      </div>
    </ElementLayout>
  );
};

export default Link014;
