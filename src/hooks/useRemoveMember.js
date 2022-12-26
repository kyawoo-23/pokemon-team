import { useDispatch } from "react-redux"
import { removePokemon } from "../store"

export const useRemoveMember = () => {
  const dispatch = useDispatch()

  const handleRemovePokemon = (teamId, member) => {
    dispatch(removePokemon({ teamId, member }))
  }

  return { handleRemovePokemon }
}
