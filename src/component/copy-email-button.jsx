import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "hakeem@hkm.co"
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <motion.button onClick={copyToClipboard} whileHover={{ y: -5 }} whileTap={{ scale: 1.05 }} className='relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden '>
      <AnimatePresence mode="wait">
      {copied ? (
        <motion.p key="copied" className='flex justify-center items-center gap-2' initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
          <img className='w-5' src="assets/icons/copy-done.svg" alt="Copied Icon" />
          Email Has copied</motion.p>
      ) : (
        <motion.p key="not-copied" className='flex items-center justify-center gap-2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <img className='w-5' src="assets/icons/copy.svg" alt="Copy Icon" />
          Copy Email Address</motion.p>
      )}
      </AnimatePresence>
    </motion.button>
  )
}

export default CopyEmailButton