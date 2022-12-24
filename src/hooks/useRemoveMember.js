import { useDispatch } from "react-redux"
import { removePokemon } from "../store"

export const useRemoveMember = (member) => {
  const dispatch = useDispatch()

  const handleRemovePokemon = (teamId) => {
    dispatch(removePokemon({ teamId, member }))
  }

  return { handleRemovePokemon }
}
