import React from "react"
import BackDrop from "./BackDrop"
import { MdClose } from "react-icons/md"
import { useState } from "react"
import { useCreateTeam } from "../hooks/useCreateTeam"

const CreateTeamOnlyModal = ({ setModalOpen }) => {
  const [teamName, setTeamName] = useState("")
  const { handleNewTeam } = useCreateTeam(teamName)

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleCreateTeam = (e) => {
    e.preventDefault()
    handleNewTeam()
    setModalOpen(false)
  }

  return (
    <BackDrop>
      <div
        className="bg-primary rounded-md p-5 flex flex-col gap-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h1 className="mr-64 text-xl text-active font-medium">
            Give your team a name!
          </h1>
          <button onClick={handleModalClose}>
            <MdClose className="text-active w-8 h-8" />
          </button>
        </div>
        <form onSubmit={handleCreateTeam} className="flex flex-col gap-y-6">
          <input
            className="p-2 w-full outline-0 rounded-md bg-inactive focus:bg-active"
            type="text"
            value={teamName}
            required
            onChange={(e) => setTeamName(e.target.value)}
          />
          <input
            className="ml-auto w-1/4 border border-inactive p-2 text-inactive cursor-pointer font-medium rounded-md hover:bg-inactive hover:text-primary transition-all"
            type="submit"
            value="Create"
          />
        </form>
      </div>
    </BackDrop>
  )
}

export default CreateTeamOnlyModal
