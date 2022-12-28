import { useDispatch } from "react-redux"
import { replacePokemon } from "../store"

export const useReplaceMember = () => {
  const dispatch = useDispatch()

  const handleReplacePokemon = (teamId, member, newMember) => {
    dispatch(replacePokemon({ teamId, member, newMember }))
  }

  return { handleReplacePokemon }
}
