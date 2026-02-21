import React from 'react'
import {AnimatePresence, motion} from 'motion/react'
const Alert = ({ type, text }) => {
  const alertVariants = {
    hidden: { opacity: 0, y: 50, scale:0.8 },
    visible: { opacity: 1, y: 0, scale:1},
    exsit:{opacity:0, y:-50, scale:0.8}
  }
  return (
    <AnimatePresence>

    <motion.div className='fixed bottom-5 right-5 z-50 p-4 justify-center items-center' initial="hidden" animate="visible" exit="exsit" variants={alertVariants} transition={{ duration: 0.3, ease: "easeInOut" }}>
      <div className={`p-2 ${type === "danger" ? "bg-red-500" : "bg-lavender"} uppercase px-2 py-1 text-xs font-semibold mr-3`}>
        <p className={`flex items-center text-indigo-100 leading-none lg:rounded-full lg:inline-flex rounded-md p-5  ${type === "danger" ? "bg-red-500" : "bg-lavender"}` }>{type === "danger" ? "Failed" : "Success"}Message sent successfully!</p>
        <p className='mr-2 text-left text-white/50'>{text}</p>
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Alert