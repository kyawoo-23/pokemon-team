import React from "react"
import TeamCardButton from "./TeamCardButton"

const TeamPokeCard = () => {
  return (
    <div className="bg-cardBg hover:bg-cardBgHover border-2 border-primary rounded-xl flex flex-col gap-y-3 items-center cursor-pointer p-3">
      <img
        className="w-38 h-38 object-contain"
        src="https://api.lorem.space/image/game"
        alt="name"
      />
      <p className="font-medium">Name</p>
      <div className="flex gap-2 items-center w-full">
        <TeamCardButton isReplace={true} />
        <TeamCardButton isReplace={false} />
      </div>
    </div>
  )
}

export default TeamPokeCard
