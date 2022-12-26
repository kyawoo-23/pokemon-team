import { useDispatch } from "react-redux"
import { addPokemon } from "../store"

export const useAddMember = () => {
  const dispatch = useDispatch()

  const handleAddPokemon = (teamId, pokeName) => {
    dispatch(addPokemon({ teamId, pokeName }))
  }

  return { handleAddPokemon }
}
