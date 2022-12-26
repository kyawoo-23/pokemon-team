import { useDispatch } from "react-redux"
import { createTeam } from "../store"
import { v4 as uuidv4 } from "uuid"

export const useCreateTeam = () => {
  const teamId = uuidv4()
  const dispatch = useDispatch()

  const handleNewTeam = (teamName) => {
    const teamStructure = {
      teamId,
      teamName,
      members: [],
    }
    dispatch(createTeam(teamStructure))
  }

  return { handleNewTeam, teamId }
}
