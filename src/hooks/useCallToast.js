import { useDispatch } from "react-redux"
import { callToast } from "../store"

export const useCallToast = () => {
  const dispatch = useDispatch()

  const handleCallToast = (msg, delay = 0) => {
    dispatch(callToast({ msg, delay }))
  }

  return { handleCallToast }
}
