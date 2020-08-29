import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file)

  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])

  return (
    <motion.div
      className="bg-green-700 h-1 inline-block"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    >
    </motion.div>
  )
}

export default ProgressBar