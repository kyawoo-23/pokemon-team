import { useNavigate } from "react-router-dom"
import { BsArrowRepeat } from "react-icons/bs"
import { MdClose } from "react-icons/md"
import { useRemoveMember } from "../hooks/useRemoveMember"
import { useCallToast } from "../hooks/useCallToast"

const TeamCardButton = ({ isReplace, teamId, member }) => {
  const navigate = useNavigate()
  const { handleRemovePokemon } = useRemoveMember()
  const { handleCallToast } = useCallToast()

  const handleReplace = (e) => {
    e.preventDefault()
    navigate(`replace/${teamId}/${member}`)
  }

  const handleRemove = (e) => {
    e.preventDefault()
    handleRemovePokemon(teamId, member)
    handleCallToast(`${member} has been removed`)
  }

  return (
    <button
      className={`${
        isReplace ? "bg-orange-500" : "bg-primary"
      }  w-1/2 py-1 grid place-content-center rounded-md`}
      onClick={isReplace ? handleReplace : handleRemove}
    >
      {isReplace ? (
        <BsArrowRepeat className='text-active h-6 w-6' />
      ) : (
        <MdClose className='text-active h-6 w-6' />
      )}
    </button>
  )
}

export default TeamCardButton
