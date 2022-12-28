import React from "react"
import { Link } from "react-router-dom"
import { MdAdd } from "react-icons/md"

const TeamBlankPokeCard = ({ teamId }) => {
  return (
    <Link
      to={`add/${teamId}`}
      className='border-2 border-dashed border-secondary rounded-xl flex flex-col items-center justify-center py-16 grow cursor-pointer'
    >
      <MdAdd className='text-primary h-20 w-20' />
      <p className='font-medium mt-2'>add Pokemon</p>
    </Link>
  )
}

export default TeamBlankPokeCard
