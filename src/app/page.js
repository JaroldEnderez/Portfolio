"use client";
import Navbar from "@/components/Navbar";
import { projectList } from "./projectList";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import company1 from "./images/ABHealth.png";
import company2 from "./images/FirstAid.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Jarold from "./images/Jarold.jpg";
import { images } from "./images";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function HomePage() {
  const techs = ["React", "Node.js", "MongoDB", "Tailwind", "Next.js", "Wordpress", "Elementor"];
  const [clicked, setClicked] = useState(Array(techs.length).fill(false));

  const handleClick = (index) => {
    setClicked((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <div>
      {/* Home Section */}
      <motion.section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between bg-gray-100 px-4 sm:px-10 gap-6 md:gap-8 py-10 md:py-0 scroll-mt-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left side: Text */}
        <div className="flex flex-col w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Web Design / Branding / Full Stack Development
          </h1>
          <p className="text-lg sm:text-xl mt-4 sm:mt-6 mb-6 sm:mb-10">
            Hello there, My name is Jarold. I find passion in solving modern
            problems and creating intuitive designs for seamless interaction. Let&apos;s work.
          </p>
        </div>

        {/* Right side: Interactive tiles */}
        <div className="flex flex-col w-full md:w-1/2">
          <motion.div variants={fadeLeft} className="mb-4">
            <p className="font-bold text-xl sm:text-2xl text-white bg-gradient-to-r from-black to-transparent px-4 sm:px-6 py-2 rounded-lg text-center md:text-left">
              My skillset
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {techs.map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => handleClick(idx)}
                className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center cursor-pointer hover:bg-blue-100"
              >
                {clicked[idx] ? (
                  <Image src={images[idx]} alt={tech} className="w-10 sm:w-12 h-10 sm:h-12 object-contain" />
                ) : (
                  <span className="font-semibold text-gray-700 text-sm sm:text-base text-center">{tech}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="h-auto flex flex-col items-center bg-black px-4 sm:px-10 py-10 scroll-mt-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="w-full max-w-5xl text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
            Some of the friends I have worked with
          </h3>
          <hr className="border-gray-400 mb-6 bg-white w-full" />

          <div className="flex flex-wrap justify-center items-center gap-x-10 mt-6">
            <a href="https://abhealthandfitness.com.au/" target="_blank" rel="noopener noreferrer">
              <Image src={company1} alt="Company 1" className="hover:opacity-80 transition" width={120} height={60} />
            </a>
            <a href="https://abfirstaid.com.au/" target="_blank" rel="noopener noreferrer">
              <Image src={company2} alt="Company 2" className="hover:opacity-80 transition" width={200} height={60} />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="min-h-screen flex flex-col bg-gray-100 px-4 sm:px-10 py-10 scroll-mt-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="w-full max-w-5xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center md:text-left mb-4">
            Creating modern designs through various technologies
          </h2>
          <p className="text-lg text-center md:text-left mb-6">
            Building projects through the lens of a user, I use my spare time to work on my skills and create meaningful applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-6 w-full">
          {projectList.map((project, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col border border-gray-300 rounded-lg shadow-sm p-4 w-full sm:w-[45%] md:w-[28%]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="w-full h-48 overflow-hidden rounded-md">
                  <Image src={project.image} alt={project.title} className="w-full h-full object-cover hover:opacity-80 transition" width={500} height={300} />
                </div>
              </Link>
              <h2 className="text-lg font-black mt-2">{project.title}</h2>
              <p className="font-medium text-sm sm:text-base">{project.description}</p>
              <div className="italic font-thin text-gray-600 gap-2 flex flex-wrap mt-2 text-sm">
                {project.tech.map((t, i) => (
                  <span key={i} className="rounded-full px-2 py-1 bg-gray-300">{t}</span>
                ))}
              </div>
              <Link href={`/projects/${project.id}`}>
                <button className="cursor-pointer mt-2 rounded-full bg-black text-white px-3 py-1 text-sm hover:bg-blue-700">
                  View Project →
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-gray-200 px-4 sm:px-10 py-10 scroll-mt-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Contact</h2>
        <p className="mb-8 text-gray-700 text-center sm:text-lg">Let&apos;s connect! You can find me here:</p>

        <div className="flex flex-wrap gap-6 text-4xl text-gray-700 justify-center">
          <a href="https://github.com/JaroldEnderez" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jaroldenderez/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:jaroldenderez69@gmail.com" className="hover:text-red-600 transition">
            <FaEnvelope />
          </a>
        </div>
      </motion.section>
    </div>
  );
}
