"use client"
import { projectList } from '@/app/projectList'
import { motion } from 'framer-motion'

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ProjectsPage({params}) {
  const project = projectList.find((p) => p.id === params.id)

  if (!project) return (<p className='p-8'>Project not found</p>)

  return (
      <main className="pt-16 flex flex-col items-center justify-center w-full pb-20">
        
        <motion.div 
        className='w-full flex flex-col items-center justify-center bg-black'
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
          <img src={project.image.src} alt={project.title} className="rounded-lg my-4 w-[600px]" />
          <div className="flex gap-x-4 p-6">
            <div className="flex border px-4 py-2 rounded-full items-center justify-center ">
              <h1 className="text-3xl text-white">{project.title}</h1>
            </div>
            <div className="flex border px-4 py-2 rounded-full items-center justify-center">
              <h1 className="text-3xl text-white">2024</h1>
            </div>
            <a 
              href={project.link}     
              target="_blank"   
              rel="noopener noreferrer"
              className="text-white bg-blue-600 px-4 py-2 rounded-lg flex justify-center items-center"
            >
              Live demo →
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className='w-300 mt-5'>
            <h1 className='text-3xl font-bold mb-5'>{project.title} - What I did</h1>
            <p className='text-justify text-2xl'>
              {project.process}
            </p>
          </div>

          <div className='flex justify-between w-300'>
            <div className='flex flex-col'>
              <h2 className="mt-6 text-3xl font-semibold mb-2">Technologies</h2>
              <div className='flex gap-x-4'>
                {project.tech.map((t) => <div className='px-2 shadow-xl py-4 border rounded-full flex justify-center items-center' key={t}>{t}</div>)}
              </div>
            </div>
      
            <div className='flex flex-col'>
              <h2 className="mt-6 text-3xl font-semibold mb-2">Concepts</h2>
              <div className='flex gap-x-4'>
                {project.subtopics.map((t) => <div className='px-2 py-4 border shadow-xl rounded-full flex justify-center items-center' key={t}>{t}</div>)}
              </div>
            </div>
          </div>
        </motion.div>
  
        
      </main>
    );
  }
  