import React from "react"

const PokeStats = ({ data, setModalOpen }) => {
  const handleAddToTeam = () => {
    setModalOpen(true)
  }

  return (
    <div className='px-4 py-8 md:p-6 lg:p-16 bg-primary bg-opacity-95 flex flex-col gap-8 h-full col-span-2 md:col-span-1'>
      <h1 className='text-2xl text-active font-bold capitalize'>
        {data?.name}
      </h1>
      <div className='flex items-center justify-end gap-3'>
        {data?.types.map(({ type }, idx) => (
          <div className='w-6 h-6 rounded-full' key={idx}>
            <img
              className='w-full h-full'
              src={`/types/Pokemon_Type_Icon_${type.name}.svg`}
              alt={type.name}
            />
          </div>
        ))}
      </div>
      <div className='mt-3'>
        {data?.stats.map(({ stat, base_stat }, idx) => (
          <div
            className='w-full flex items-center justify-between gap-x-4 md:gap-x-8 mb-3 md:mb-1'
            key={idx}
          >
            <h4 className='text-active text-lg capitalize'>{stat.name}</h4>
            <p className='text-inactive text-md'>{base_stat}</p>
          </div>
        ))}
      </div>
      <button
        className='mt-5 border-2 border-inactive w-full rounded-lg uppercase font-medium text-lg p-1 text-inactive hover:bg-inactive hover:text-primary transition-all'
        onClick={handleAddToTeam}
      >
        Add to team
      </button>
    </div>
  )
}

export default PokeStats
