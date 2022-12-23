import React from "react"
import { BsArrowRepeat } from "react-icons/bs"
import { MdClose } from "react-icons/md"

const TeamCardButton = ({ isReplace }) => {
  return (
    <button
      className={`${
        isReplace ? "bg-orange-500" : "bg-primary"
      }  w-1/2 py-1 grid place-content-center rounded-md`}
    >
      {isReplace ? (
        <BsArrowRepeat className="text-active h-6 w-6" />
      ) : (
        <MdClose className="text-active h-6 w-6" />
      )}
    </button>
  )
}

export default TeamCardButton
