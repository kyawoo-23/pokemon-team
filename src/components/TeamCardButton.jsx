import { useNavigate } from "react-router-dom"
import { BsArrowRepeat } from "react-icons/bs"
import { MdClose } from "react-icons/md"
import { useRemoveMember } from "../hooks/useRemoveMember"

const TeamCardButton = ({ isReplace, teamId, member }) => {
  const navigate = useNavigate()
  const { handleRemovePokemon } = useRemoveMember()

  const handleReplace = (e) => {
    e.preventDefault()
    navigate(`replace/${teamId}/${member}`)
  }

  const handleRemove = (e) => {
    e.preventDefault()
    handleRemovePokemon(teamId, member)
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
