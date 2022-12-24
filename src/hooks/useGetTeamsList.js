import { useSelector } from "react-redux"

export const useGetTeamsList = () => {
  return useSelector((state) => state.teams)
}
