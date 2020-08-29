import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ selectedImage, setSelectedImage }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImage(null)
    }
  }

  return (
    <motion.div 
      className="backdrop fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 flex items-center justify-center" 
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img 
        src={selectedImage} 
        alt="enlarged pic"
        className="bg-white border-2 border-white shadow-lg"
        style={{ maxWidth: 60 + '%', maxHeight: 85 + '%' }} 
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  )
}

export default Modal
