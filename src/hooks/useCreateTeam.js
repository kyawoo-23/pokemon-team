import { useDispatch } from "react-redux"
import { createTeam } from "../store"
import { v4 as uuidv4 } from "uuid"

export const useCreateTeam = (teamName) => {
  const teamId = uuidv4()
  const dispatch = useDispatch()

  const teamStructure = {
    teamId,
    teamName,
    members: [],
  }

  const handleNewTeam = () => {
    dispatch(createTeam(teamStructure))
  }

  return { handleNewTeam, teamId }
}
