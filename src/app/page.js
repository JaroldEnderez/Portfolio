// app/page.js
import Navbar from "@/components/Navbar";
import { projectList } from "./projectList";


export default function HomePage() {
  return (
    <div>

      <section id="home" className="min-h-screen flex flex-col items-start justify-center   bg-gray-100 fade-in">
        <div className="flex flex-col w-1/2 pl-10">
          <h1 className="text-md font-bold">Web Design / Branding / Full Stack Development</h1>
          <p className="text-lg mt-6 mb-10">Hello there, My name is Jarold. I find passion in solving modern problems and creating intuitive designs for seamless interaction. Let&apos;s work.</p>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p>
            I&apos;m a full-stack developer passionate about building sleek apps with React &amp; Next.js.
          </p>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-start justify-center   bg-gray-100 fade-in">
        <div className="flex flex-col w-1/2 pl-10">
          <h2 className="text-3xl font-semibold">Creating modern designs through various techologies</h2>
          <p className="text-lg mt-6 mb-4">Building projects through the lens of a user, he uses his spare time to work on his skills and create meaningful applications.</p>
          <button to='/' className="mb-10 rounded-full bg-black text-white px-4 py-2 w-1/4">View my projects</button>
        </div>
        <div className="flex gap-x-4 pl-10">
          {projectList.map((project, idx) => (
            <div className="flex flex-col border border-gray-300 rounded-lg shadow-sm p-4" key={idx}>
              <img src={project.img} alt="Project Image" className="p-2 w-full h-auto"></img>
              <h2 className="text-lg text-black font-black">{project.title}</h2>
              <p className="font-medium">{project.description}</p>
              <div className="italic font-thin text-gray-600">
                {project.tech.map((t, i) =>(
                  <span key={i} >{t} {i !== project.tech.length - 1 && ', ' }</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-200">
        <h2 className="text-3xl font-semibold">Contact</h2>
      </section>
    </div>
  );
}
