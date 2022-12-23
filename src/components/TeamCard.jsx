import React from "react"
import { AiFillDelete } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { deleteTeam } from "../store"
import TeamBlankPokeCard from "./TeamBlankPokeCard"
import TeamPokeCard from "./TeamPokeCard"

const TeamCard = ({ teamName, id }) => {
  const dispatch = useDispatch()
  const memberList = useSelector((state) => state.teams[id].members)
  console.log("members", memberList)

  const handleDeleteTeam = (team) => {
    dispatch(deleteTeam(team))
  }

  return (
    <div className="basis-full bg-inactive rounded-xl p-5 mr-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-primary font-medium">{teamName}</h2>
        <button onClick={() => handleDeleteTeam(id)}>
          <AiFillDelete className="text-primary w-7 h-7" />
        </button>
      </div>
      <div className="flex flex-wrap items-stretch justify-center gap-4 mt-5 mb-2">
        {memberList?.map((member, idx) => (
          <TeamPokeCard member={member} key={idx} />
        ))}
        {!(memberList.length >= 6) && <TeamBlankPokeCard teamId={id} />}
      </div>
    </div>
  )
}

export default TeamCard
