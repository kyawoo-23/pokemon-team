import React from "react"
import { useNavigate } from "react-router-dom"
import { useReplaceMember } from "../hooks/useReplaceMember"
import { useFetchPokemonDetailsQuery } from "../store"
import Loader from "./Loader"

const PokeCardReplace = ({ teamId, oldMem, name }) => {
  const navigate = useNavigate()
  const { data, error, isFetching } = useFetchPokemonDetailsQuery(name)
  const { handleReplacePokemon } = useReplaceMember()

  const handleAddToTeam = (e) => {
    e.preventDefault()
    handleReplacePokemon(teamId, oldMem, name)
    navigate("/teams")
  }

  return (
    <div
      to={`pokemon/${name}`}
      className={`border-2 border-secondary bg-cardBg rounded-2xl p-5 flex flex-col gap-y-4 cursor-pointer hover:bg-cardBgHover transition-all`}
      onClick={handleAddToTeam}
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

      <button className='border-2 border-secondary w-full rounded-lg uppercase font-medium text-lg p-1 text-secondary hover:bg-secondary hover:text-black transition-all'>
        Replace
      </button>
    </div>
  )
}

export default PokeCardReplace
