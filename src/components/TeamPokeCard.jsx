import React from "react"
import { Link } from "react-router-dom"
import { useFetchPokemonDetailsQuery } from "../store"
import TeamCardButton from "./TeamCardButton"

const TeamPokeCard = ({ member, teamId }) => {
  const { data, isFetching } = useFetchPokemonDetailsQuery(member)

  return (
    <Link
      to={`/pokemon/${member}`}
      className='bg-cardBg hover:bg-cardBgHover border-2 border-primary rounded-xl flex flex-col gap-y-3 items-center cursor-pointer p-3 max-sm:w-full'
    >
      {isFetching ? (
        <p>Loading {member} img</p>
      ) : (
        <img
          className='w-38 h-38 object-contain'
          src={data.sprites.other.home.front_default}
          alt={member}
        />
      )}
      <p className='font-medium capitalize'>{member}</p>
      <div className='flex gap-2 items-center w-full'>
        <TeamCardButton isReplace={true} teamId={teamId} member={member} />
        <TeamCardButton isReplace={false} teamId={teamId} member={member} />
      </div>
    </Link>
  )
}

export default TeamPokeCard
