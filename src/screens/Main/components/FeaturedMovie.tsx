import React, { useMemo, useRef, useState } from 'react'
import { IMovieDetail } from 'shared/types/moviesData'

import { secondsToHoursMinutes } from 'shared/utils/date'

import { CoverImage } from '../styles'
import { Button, Category, Dates, Description, DetailsWrapper, Logo, VideoWrapper } from './FeaturedMovieStyles'

interface IFeaturedMovieProps {
  data: IMovieDetail | null
}

const FeaturedMovie: React.FC<IFeaturedMovieProps> = ({ data }) => {
  const vidRef = useRef<HTMLVideoElement>(null)

  const [isPlayed, setIsPlayed] = useState(false)
  const [videoLoading, setVideoLoading] = useState(false)
  const duration = useMemo(() => {
    return secondsToHoursMinutes(parseInt(data?.Duration || '0'))
  }, [data?.Duration])

  return (
    <>
      <CoverImage $hide={isPlayed} $url={`assets/FeaturedCoverImage.png`} />
      <VideoWrapper $loading={videoLoading}>
        <video
          key={data?.Id}
          ref={vidRef}
          muted
          loop
          onLoadStart={() => {
            setVideoLoading(true)
          }}
          onLoadedData={(event) => {
            setTimeout(() => {
              setVideoLoading(false)

              if (event.target instanceof HTMLVideoElement) {
                if (!isPlayed) {
                  setIsPlayed(true)
                }
                event.target.play()
              }
            }, 2000)
          }}
          onError={(e) => {
            setVideoLoading(false)
          }}
          // style={{ width: '100%', maxWidth: '800px', display: 'block', margin: 'auto' }}
        >
          <source src={data?.VideoUrl} type="video/mp4" />
        </video>
      </VideoWrapper>

      <DetailsWrapper>
        <Category>{data?.Category}</Category>
        <Logo src={`assets/${data?.TitleImage}`} />
        <Dates>
          <div>{data?.ReleaseYear}</div>
          <div>{data?.MpaRating}</div>
          <div>
            {duration.hours}h {duration.minutes}m
          </div>
        </Dates>

        <Description>{data?.Description}</Description>
        <div>
          <Button variant={'secondary'}>
            <span>Play</span>
          </Button>
          <Button variant={'primary'}>
            <span>More Info</span>
          </Button>
        </div>
      </DetailsWrapper>
    </>
  )
}

export default FeaturedMovie
