import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='w-full h-screen bg-primary grid place-items-center'>
      <div className='grid place-items-center gap-5'>
        <img className='w-38 h-38' src='/pikachu.png' alt='pikachu' />
        <p className='text-inactive text-2xl'>Looks like you are lost!</p>
        <Link
          to='/'
          className='text-inactive text-lg font-medium border-2 border-secondary rounded-lg px-4 py-2 hover:bg-secondary hover:text-primary transition-all'
        >
          Go back
        </Link>
      </div>
    </div>
  )
}

export default NotFound
