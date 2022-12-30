import React from "react"
import { useState } from "react"
import Layout from "../components/Layout"
import { useSelector } from "react-redux"
import { MdOutlineAddCircle } from "react-icons/md"
import CreateTeamOnlyModal from "../components/CreateTeamOnlyModal"
import TeamCard from "../components/TeamCard"

const Team = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const teamList = useSelector((state) => state.teams)
  // console.log(teamList)

  const handleModal = () => {
    setModalOpen(true)
  }

  return (
    <Layout title='My teams'>
      {modalOpen && <CreateTeamOnlyModal setModalOpen={setModalOpen} />}
      {teamList.length !== 0 ? (
        <>
          {teamList.map(({ teamName, teamId, members }) => (
            <TeamCard
              teamName={teamName}
              teamId={teamId}
              members={members}
              key={teamId}
            />
          ))}
          <div
            className='fixed bottom-10 right-10 h-12 w-12 bg-primary drop-shadow-md rounded-full grid place-content-center cursor-pointer transition-all'
            onClick={handleModal}
          >
            <MdOutlineAddCircle className='text-inactive h-10 w-10 hover:text-active transition-all' />
          </div>
        </>
      ) : (
        <div
          className='basis-full mt-8 border-4 md:border-8 border-inactive border-dashed p-[15%] cursor-pointer text-inactive hover:text-secondary transition-all'
          onClick={handleModal}
        >
          <p className='text-center text-2xl md:text-4xl uppercase font-bold'>
            Create Team
          </p>
        </div>
      )}
    </Layout>
  )
}

export default Team
