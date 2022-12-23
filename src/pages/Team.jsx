import React from "react"
import { useState } from "react"
import Layout from "../components/Layout"
import { useDispatch, useSelector } from "react-redux"
import { deleteTeam } from "../store"
import { AiFillDelete } from "react-icons/ai"
import { MdOutlineAddCircle } from "react-icons/md"
import Modal from "../components/Modal"

const Team = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch()

  const teamList = useSelector((state) => state.teams)
  console.log(teamList)

  const handleDeleteTeam = (team) => {
    dispatch(deleteTeam(team))
  }

  const handleModal = () => {
    setModalOpen(true)
  }

  return (
    <Layout title="My teams">
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
      {teamList.length !== 0 ? (
        <>
          {teamList.map(({ teamName }, idx) => (
            <div className="basis-full bg-slate-400 p-5" key={idx}>
              <div className="flex items-center justify-between">
                <h2>{teamName}</h2>
                <button onClick={() => handleDeleteTeam(idx)}>
                  <AiFillDelete className="text-primary w-7 h-7" />
                </button>
              </div>
            </div>
          ))}
          <div
            className="fixed bottom-10 right-10 h-12 w-12 bg-primary rounded-full grid place-content-center cursor-pointer"
            onClick={handleModal}
          >
            <MdOutlineAddCircle className="text-inactive h-10 w-10 hover:text-active transition-all" />
          </div>
        </>
      ) : (
        <div
          className="basis-full mt-8 border-8 border-inactive border-dashed p-20 cursor-pointer text-inactive hover:text-secondary transition-all"
          onClick={handleModal}
        >
          <p className="text-center text-4xl uppercase font-bold">
            Create Team
          </p>
        </div>
      )}
    </Layout>
  )
}

export default Team
