import React from 'react'
import Slider from 'react-slick'
import { CURRENT_MOVIE_ID } from 'shared/constants/localStorageKey'
import { IMovieDetail } from 'shared/types/moviesData'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import { MovieCard, SectionWrapper } from './TrendingSectionStyles'

interface ITrendingSectionProps {
  data: IMovieDetail[]
  setFeaturedMovie: (movie: IMovieDetail) => void
}

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 8,
  adaptiveHeight: true,
  focusOnSelect: true,

  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 6,
      },
    },
  ],
}

const TrendingSection: React.FC<ITrendingSectionProps> = ({ data, setFeaturedMovie }) => {
  return (
    <SectionWrapper>
      <Slider {...settings}>
        {data.map((slide) => (
          <div key={slide.Id}>
            <MovieCard
              onClick={() => {
                localStorage.setItem(CURRENT_MOVIE_ID, slide.Id)
                setFeaturedMovie(slide)
              }}
            >
              <img src={`assets/${slide.CoverImage}`} alt={slide.Title} />
            </MovieCard>
          </div>
        ))}
      </Slider>
    </SectionWrapper>
  )
}

export default TrendingSection
