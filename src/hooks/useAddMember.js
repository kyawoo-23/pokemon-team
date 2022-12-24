import { useDispatch } from "react-redux"
import { addPokemon } from "../store"

export const useAddMember = (pokeName) => {
  const dispatch = useDispatch()

  const handleAddPokemon = (teamId) => {
    dispatch(addPokemon({ teamId, pokeName }))
  }

  return { handleAddPokemon }
}
