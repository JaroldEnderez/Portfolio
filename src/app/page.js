"use client";
import Navbar from "@/components/Navbar";
import { projectList } from "./projectList";
import Image from "next/image";
import Link from "next/link";
import company1 from "./images/ABHealth.png";
import company2 from "./images/FirstAid.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function HomePage() {
  return (
    <div>
      {/* Home Section */}
      <motion.section
        id="home"
        className="min-h-screen flex flex-col items-start justify-center bg-gray-100 fade-in"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col w-1/2 pl-10">
          <h1 className="text-md font-bold">
            Web Design / Branding / Full Stack Development
          </h1>
          <p className="text-lg mt-6 mb-10">
            Hello there, My name is Jarold. I find passion in solving modern
            problems and creating intuitive designs for seamless interaction.
            Let&apos;s work.
          </p>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="h-auto flex flex-col items-start bg-black px-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mt-16 text-center w-full items-center mb-20">
          <div className="flex w-full items-center gap-4">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Some of the friends I have worked with
            </h3>
            <hr className="border-gray-400 mb-6 bg-white w-full" />
          </div>

          {/* Logos */}
          <div className="flex justify-between items-center mt-6 w-[50rem] mx-auto">
            <a
              href="https://abhealthandfitness.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={company1}
                alt="Company 1"
                className="block hover:opacity-80 transition"
                width={150}
                height={80}
              />
            </a>

            <a
              href="https://abfirstaid.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={company2}
                alt="Company 2"
                className="block hover:opacity-80 transition"
                width={150}
                height={80}
              />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="min-h-screen flex flex-col items-start justify-center bg-gray-100 fade-in"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col w-1/2 pl-10">
          <h2 className="text-3xl font-semibold">
            Creating modern designs through various technologies
          </h2>
          <p className="text-lg mt-6 mb-4">
            Building projects through the lens of a user, he uses his spare time
            to work on his skills and create meaningful applications.
          </p>
        </div>

        <div className="flex gap-x-4 pl-10">
          {projectList.map((project, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col border border-gray-300 rounded-lg shadow-sm p-4 flex-1 max-w-[28rem]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link href={project.link}>
                <Image
                  src={project.img}
                  alt="Project Image"
                  className="p-2 w-full h-auto rounded-md hover:opacity-80 transition"
                  width={500}
                  height={300}
                />
              </Link>

              <h2 className="text-lg text-black font-black mt-2">
                {project.title}
              </h2>
              <p className="font-medium">{project.description}</p>
              <div className="italic font-thin text-gray-600">
                {project.tech.map((t, i) => (
                  <span key={i}>
                    {t}
                    {i !== project.tech.length - 1 && ", "}
                  </span>
                ))}
              </div>

              <Link href={project.link}>
                <button className="mt-4 rounded-full bg-black text-white px-3 py-1 text-sm hover:bg-blue-700">
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
        className="min-h-screen flex flex-col items-center justify-center bg-gray-200"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="mb-8 text-gray-700">Let’s connect! You can find me here:</p>

        <div className="flex gap-10 text-4xl text-gray-700">
          <a
            href="https://github.com/JaroldEnderez"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jaroldenderez/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:jaroldenderez69@gmail.com"
            className="hover:text-red-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.section>
    </div>
  );
}
