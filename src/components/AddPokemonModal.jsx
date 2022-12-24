import { useState } from "react"
import BackDrop from "./BackDrop"
import { MdClose } from "react-icons/md"
import { HiPlus } from "react-icons/hi"
import { useCreateTeam } from "../hooks/useCreateTeam"
import { useAddMember } from "../hooks/useAddMember"
import { useGetTeamsList } from "../hooks/useGetTeamsList"
import { useRemoveMember } from "../hooks/useRemoveMember"
import CheckBoxTeamList from "./CheckBoxTeamList"

const AddPokemonModal = ({ setModalOpen, pokeName }) => {
  const [teamName, setTeamName] = useState("")
  const [showCreateTeamSection, setShowCreateTeamSection] = useState(false)
  const { handleNewTeam, teamId } = useCreateTeam(teamName)
  const { handleAddPokemon } = useAddMember(pokeName)
  const { handleRemovePokemon } = useRemoveMember(pokeName)
  const teamsList = useGetTeamsList()
  const [selectedTeam, setSelectedTeam] = useState([])
  const [removedTeam, setRemovedTeam] = useState([])

  const handleModalClose = () => {
    setShowCreateTeamSection(false)
    setModalOpen(false)
  }

  const handleAddToTeam = (e) => {
    e.preventDefault()
    if (teamName !== "") {
      handleNewTeam()
      handleAddPokemon(teamId)
    }
    console.log("sele team", selectedTeam)
    selectedTeam?.map((stid) => {
      handleAddPokemon(stid)
    })

    removedTeam?.map((rtid) => {
      handleRemovePokemon(rtid)
    })

    setSelectedTeam([])
    setShowCreateTeamSection(false)
    setModalOpen(false)
  }

  const handleSelectedTeam = (teamId) => {
    if (selectedTeam.includes(teamId)) {
      setSelectedTeam((prev) => prev.filter((p) => p !== teamId))
      setRemovedTeam((prev) => [...prev, teamId])
      console.log("remove")
    } else {
      setSelectedTeam((prev) => [...prev, teamId])
      setRemovedTeam((prev) => prev.filter((p) => p !== teamId))
      console.log("add")
    }
  }

  const handleShowCreateTeamSection = () => {
    setShowCreateTeamSection(true)
  }

  return (
    <BackDrop>
      <div
        className="bg-primary rounded-md p-5 flex flex-col gap-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h1 className="mr-64 text-xl text-active font-medium">
            Add {pokeName} to...
          </h1>
          <button onClick={handleModalClose}>
            <MdClose className="text-active w-8 h-8" />
          </button>
        </div>
        <form onSubmit={handleAddToTeam} className="flex flex-col gap-y-6">
          {teamsList?.map(({ teamName, teamId, members }) => (
            <CheckBoxTeamList
              teamName={teamName}
              teamId={teamId}
              members={members}
              handleSelectedTeam={handleSelectedTeam}
              pokeName={pokeName}
              key={teamId}
            />
          ))}

          <div
            className="mt-2 flex items-center gap-4 cursor-pointer"
            onClick={handleShowCreateTeamSection}
          >
            <HiPlus className="text-active h-6 w-6" />
            <span className="text-active">Create a new team</span>
          </div>
          {showCreateTeamSection && (
            <>
              <input
                className="p-2 w-full outline-0 rounded-md bg-inactive focus:bg-active"
                type="text"
                value={teamName}
                required
                onChange={(e) => setTeamName(e.target.value)}
                autoFocus
              />
            </>
          )}
          <input
            className="ml-auto w-1/4 border border-inactive p-2 text-inactive cursor-pointer font-medium rounded-md hover:bg-inactive hover:text-primary transition-all"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </BackDrop>
  )
}

export default AddPokemonModal
