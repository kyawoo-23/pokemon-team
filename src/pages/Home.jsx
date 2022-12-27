import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Layout from "../components/Layout"
import Loader from "../components/Loader"
import PokeCard from "../components/PokeCard"
import { loadMorePage, useFetchPokemonQuery } from "../store"

const Home = () => {
  const dispatch = useDispatch()
  const pageNo = useSelector((state) => state.page)
  const [page, setPage] = useState(pageNo.value)

  const { data, error, isLoading, isFetching } = useFetchPokemonQuery(page)

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
    <Layout title='All pokemons'>
      {error ? (
        <p className='text-red-600'>Error fetching data</p>
      ) : isLoading ? (
        <p className='text-center'>Loading data...</p>
      ) : (
        data.results.map(({ name }, idx) => <PokeCard name={name} key={idx} />)
      )}
      {isFetching && <Loader />}
    </Layout>
  )
}

export default Home
