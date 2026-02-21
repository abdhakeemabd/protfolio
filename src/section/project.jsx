import React, { useState } from 'react'
import { myProjects } from '../constants'
import ProjectCard from '../component/project'
import {motion, useMotionValue, useSpring} from 'motion/react'
const Projects = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, {stiffness: 50, damping: 10})
  const springY = useSpring(y, {stiffness: 50, damping: 10})
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
   x.set(e.clientX + 20);
   y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null)
  return (
    <section onMouseMove={handleMouseMove} className='relative c-space section-spacing'>
      <h2 className='text-heading'>My Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full mt-12"></div>
      {myProjects.map((project) => {
        return (
          <ProjectCard key={project.id} {...project} setPreview={setPreview} />
        )
      })}
     {preview &&( <motion.img className='fixed top-0 left-0 z-50 object-cover h-56 rounded-xl shadow-lg pointer-events-none w-80' src={preview} alt='preview' style={{x: springX, y: springY}}/>)}
    </section>
  )
}

export default Projects