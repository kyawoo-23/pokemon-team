import React from "react"
import { HiPlus } from "react-icons/hi"
import { useAddMember } from "../hooks/useAddMember"

const TeamBlankPokeCard = ({ teamId }) => {
  const { handleAddPokemon } = useAddMember(teamId, "test1")

  const handleAddMember = () => {
    handleAddPokemon()
  }

  return (
    <div
      className="border-2 border-dashed border-primary rounded-xl flex flex-col items-center justify-center py-14 grow cursor-pointer"
      onClick={handleAddMember}
    >
      <HiPlus className="text-primary h-20 w-20" />
      <p className="font-medium mt-2">add Pokemon</p>
    </div>
  )
}

export default TeamBlankPokeCard
