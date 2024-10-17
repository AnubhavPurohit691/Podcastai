import { Link } from 'react-router-dom'
import { TypewriterEffect } from './ui/typewriter-effect'

export default function Firstpage() {
  const words = [
    
    {
      text: "PDFs",
    },
    {
      text: "To"
    },
    {
      text: "Engaging",
    },
    
    {
      text: `Podcasts !`,
      className: "text-blue-500 dark:text-blue-500",
    },
  ]

  return (
    <div className="h-full  py-20 gap-10  flex flex-col items-center justify-center  ">
      <TypewriterEffect words={words} />
      <div className='flex flex-row gap-20'>
      
      
      </div>
        
    </div>
  )
}