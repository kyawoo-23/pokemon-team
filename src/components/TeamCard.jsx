import React from "react"
import { AiFillDelete } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { deleteTeam } from "../store"
import TeamBlankPokeCard from "./TeamBlankPokeCard"
import TeamPokeCard from "./TeamPokeCard"

const TeamCard = ({ teamName, teamId, members }) => {
  const dispatch = useDispatch()
  console.log("members", members)

  const handleDeleteTeam = (teamId) => {
    dispatch(deleteTeam(teamId))
  }

  return (
    <div className='basis-full bg-cardBgHover drop-shadow rounded-xl p-5 mr-auto'>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl text-primary font-medium'>{teamName}</h2>
        <button onClick={() => handleDeleteTeam(teamId)}>
          <AiFillDelete className='text-primary w-7 h-7' />
        </button>
      </div>
      <div className='flex flex-wrap items-stretch justify-center gap-4 mt-5 mb-2'>
        {members?.map((member, idx) => (
          <TeamPokeCard member={member} teamId={teamId} key={idx} />
        ))}
        {!(members.length >= 6) && <TeamBlankPokeCard teamId={teamId} />}
      </div>
    </div>
  )
}

export default TeamCard
