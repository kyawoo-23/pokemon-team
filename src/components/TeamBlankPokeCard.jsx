import React from "react"
import { MdAdd } from "react-icons/md"
import { useAddMember } from "../hooks/useAddMember"

const TeamBlankPokeCard = ({ teamId }) => {
  const { handleAddPokemon } = useAddMember(teamId, "test1")

  const handleAddMember = () => {
    handleAddPokemon()
  }

  return (
    <div
      className='border-2 border-dashed border-secondary rounded-xl flex flex-col items-center justify-center py-16 grow cursor-pointer'
      onClick={handleAddMember}
    >
      <MdAdd className='text-primary h-20 w-20' />
      <p className='font-medium mt-2'>add Pokemon</p>
    </div>
  )
}

export default TeamBlankPokeCard
