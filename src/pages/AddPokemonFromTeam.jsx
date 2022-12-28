import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useFetchPokemonQuery, loadMorePage } from "../store"
import Loader from "../components/Loader"
import Layout from "../components/Layout"
import PokeCardAdd from "../components/PokeCardAdd"

const AddPokemonFromTeam = () => {
  const dispatch = useDispatch()
  const pageNo = useSelector((state) => state.page)
  const [page, setPage] = useState(pageNo.value)
  const { data, error, isLoading, isFetching } = useFetchPokemonQuery(page)

  const { teamId } = useParams()
  const teamList = useSelector((state) => state.teams)
  const { teamName } = teamList.find((t) => t.teamId === teamId)

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + Math.ceil(window.pageYOffset) >=
        document.body.offsetHeight
      ) {
        console.log("Fetching more data...")
        setPage(page + 1)
        dispatch(loadMorePage())
      }
    }

    document.addEventListener("scroll", onScroll)

    return function () {
      document.removeEventListener("scroll", onScroll)
    }
  }, [page, isFetching])

  return (
    <Layout title={`Add a pokemon to team, ${teamName}`}>
      {error ? (
        <p className='text-red-600'>Error fetching data</p>
      ) : isLoading ? (
        <p className='text-center'>Loading data...</p>
      ) : (
        data.results.map(({ name }, idx) => (
          <PokeCardAdd name={name} teamId={teamId} key={idx} />
        ))
      )}
      {isFetching && <Loader />}
    </Layout>
  )
}

export default AddPokemonFromTeam
