import React from "react"
import { useEffect } from "react"
import { useState } from "react"

const CheckBoxTeamList = ({
  teamName,
  teamId,
  members,
  handleSelectedTeam,
  pokeName,
}) => {
  const [isChecked, setIsChecked] = useState(
    members.indexOf(pokeName) === -1 ? false : true
  )

  const handleCheckBox = () => {
    setIsChecked(!isChecked)
    handleSelectedTeam(teamId)
  }

  useEffect(() => {
    isChecked && handleSelectedTeam(teamId)
  }, [])

  return (
    <div className="flex items-center text-active gap-5 cursor-pointer">
      <input
        type="checkbox"
        value={teamId}
        id={teamId}
        className="w-6 h-6 outline-none cursor-pointer"
        checked={isChecked}
        onChange={(e) => handleCheckBox(e.target.value)}
      />
      <label
        htmlFor={teamId}
        className="w-full text-lg cursor-pointer select-none"
      >
        {teamName}
      </label>
    </div>
  )
}

export default CheckBoxTeamList
