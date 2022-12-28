import { useDispatch } from "react-redux"
import { callToast } from "../store"

export const useCallToast = () => {
  const dispatch = useDispatch()

  const handleCallToast = (msg) => {
    dispatch(callToast(msg))
  }

  return { handleCallToast }
}
