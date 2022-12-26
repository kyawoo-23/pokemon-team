import React, { useState } from "react"
import { useFetchPokemonDetailsQuery } from "../store"
import AddPokemonModal from "./AddPokemonModal"
import Loader from "./Loader"

const PokeCard = ({ name }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const { data, error, isFetching } = useFetchPokemonDetailsQuery(name)

  const handleAddToTeam = () => {
    setModalOpen(true)
  }

  return (
    <>
      {modalOpen && (
        <AddPokemonModal pokeName={name} setModalOpen={setModalOpen} />
      )}
      <div
        className={`border-2 border-secondary bg-cardBg rounded-2xl p-5 flex flex-col gap-y-4 cursor-pointer hover:bg-cardBgHover transition-all`}
      >
        {isFetching ? (
          <div className='grid place-content-center'>
            <Loader />
          </div>
        ) : (
          <img
            className='w-52 h-52 object-contain'
            src={data.sprites.other.home.front_default}
            alt={name}
          />
        )}

        <p className='font-semibold text-xl capitalize'>{name}</p>

        <button
          className='border-2 border-secondary w-full rounded-lg uppercase font-medium text-lg p-1 text-secondary hover:bg-secondary hover:text-black transition-all'
          onClick={handleAddToTeam}
        >
          Add to team
        </button>
      </div>
    </>
  )
}

export default PokeCard
