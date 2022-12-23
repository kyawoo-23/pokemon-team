import { useDispatch } from "react-redux"
import { createTeam } from "../store"

export const useCreateTeam = (teamName) => {
  const dispatch = useDispatch()

  const teamStructure = {
    teamName,
    members: [],
  }

  const handleNewTeam = () => {
    dispatch(createTeam(teamStructure))
  }

  return { handleNewTeam }
}
