import React, { useEffect, useState } from 'react'
import { CURRENT_MOVIE_ID } from 'shared/constants/localStorageKey'
import { IApiData, IMovieDetail } from 'shared/types/moviesData'

import FeaturedMovie from './components/FeaturedMovie'
import TrendingSection from './components/TrendingSection'
import { MainWrapper } from './styles'

const MainScreen = () => {
  const [trendingList, setTrendingList] = useState<IMovieDetail[]>([])
  const [featuredMovie, setFeaturedMovie] = useState<IMovieDetail | null>(null)
  const savedMovieId = localStorage.getItem(CURRENT_MOVIE_ID)
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((res: IApiData) => {
        const currentMovie = res.TendingNow.find((movie) => movie.Id === savedMovieId)
        setFeaturedMovie(currentMovie ?? res.Featured)

        setTrendingList(res.TendingNow)
      })
  }, [savedMovieId])

  return (
    <MainWrapper>
      <FeaturedMovie data={featuredMovie} />
      <TrendingSection data={trendingList} setFeaturedMovie={setFeaturedMovie} />
    </MainWrapper>
  )
}

export default MainScreen
