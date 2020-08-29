import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'
import Image from './Image'

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore('images')

  return (
    <div className="px-2 max-w-screen-lg my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto">
      {
        docs && docs.map(doc => (
          <motion.div key={doc.id}
            className="relative pb-1/1 cursor-pointer"
            onClick={() => setSelectedImage(doc.url)}
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            layout
          >
            <Image imageUrl={doc.url} />
          </motion.div>
        ))
      }
    </div>
  )
}

export default ImageGrid
