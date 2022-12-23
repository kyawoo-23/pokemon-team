import { useDispatch } from "react-redux"
import { addPokemon } from "../store"

export const useAddMember = (teamId, pokeId) => {
  const dispatch = useDispatch()

  const addInfo = {
    teamId,
    pokeId,
  }

  const handleAddPokemon = () => {
    dispatch(addPokemon(addInfo))
  }

  return { handleAddPokemon }
}
