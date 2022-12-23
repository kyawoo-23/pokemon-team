import React from "react"

const PokeCard = ({ name }) => {
  const handleAddToTeam = () => {}

  return (
    <div className="border-2 border-secondary bg-cardBg rounded-2xl p-5 flex flex-col gap-y-4 cursor-pointer hover:bg-cardBgHover transition-all">
      <img
        className="w-52 h-52 object-contain"
        src="https://api.lorem.space/image/game"
        alt="name"
      />

      <p className="font-semibold text-xl">{name}</p>

      <button
        className="border-2 border-secondary w-full rounded-lg uppercase font-medium text-lg py-1 text-secondary hover:bg-secondary hover:text-black transition-all"
        onClick={handleAddToTeam}
      >
        Add to team
      </button>
    </div>
  )
}

export default PokeCard
