import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const handleFileChange = (e) => {
    let selected = e.target.files[0]

    const types = ['image/png', 'image/jpeg']

    if (selected && types.includes(selected.type)) {
      setFile(selected)
      setError('')
    } else {
      setFile(null)
      setError('Only images of type png or jpeg are allowed.')
    }
  }

  return (
    <div className="mt-10">
      <div className="flex flex-col items-center space-y-2">
        <div>
          <label className="cursor-pointer">
            <div className="flex items-center justify-center rounded-full border border-black p-2 transform transition-transform duration-150 hover:rotate-90">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" /></svg>
            </div>
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>
        </div>
        <div>
          {error && <div className="text-red-700">{error}</div>}
          {file && <div className="text-gray-800">{file.name}</div>}
        </div>
      </div>

      {file && <ProgressBar file={file} setFile={setFile} />}
    </div>
  )
}

export default UploadForm
