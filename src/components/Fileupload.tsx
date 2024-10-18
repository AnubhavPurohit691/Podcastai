import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileIcon, UploadIcon, CheckCircleIcon } from 'lucide-react'
import { BackgroundGradient } from './ui/background-gradient'

export default function PdfUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile)
      uploadFile(droppedFile)
    }
  }, [])

  const onFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile)
      uploadFile(selectedFile)
    }
  }, [])

  const uploadFile = (file: File) => {
    setIsUploading(true)
    // Simulating file upload
    setTimeout(() => {
      setIsUploading(false)
      setUploadComplete(true)
    }, 3000)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
        <BackgroundGradient>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Upload PDF</h2>
        <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
        >
          <AnimatePresence>
            {!file && !isUploading && !uploadComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  Drag and drop your PDF here, or click to select
                </p>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={onFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                >
                  Select PDF
                </label>
              </motion.div>
            )}
            {file && !isUploading && !uploadComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center"
              >
                <FileIcon className="h-8 w-8 text-blue-500 mr-2" />
                <span className="text-sm text-gray-600">{file.name}</span>
              </motion.div>
            )}
            {isUploading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  className="h-8 w-8 border-t-2 border-blue-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <p className="mt-2 text-sm text-gray-600">Uploading...</p>
              </motion.div>
            )}
            {uploadComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center"
              >
                <CheckCircleIcon className="h-12 w-12 text-green-500" />
                <p className="mt-2 text-sm text-gray-600">Upload Complete!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      </BackgroundGradient>
    </div>
  )
}