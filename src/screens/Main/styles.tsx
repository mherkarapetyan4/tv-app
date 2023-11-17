import styled from 'styled-components'

interface ICoverProps {
  $url: string
  $hide: boolean
}
export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const CoverImage = styled.div<ICoverProps>`
  background: url(${(props) => props.$url});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
  background-position: right top;
  position: absolute;
  z-index: 1;
  background-repeat: no-repeat;
  transition: 0.3s;
  opacity: ${(props) => (props.$hide ? 0 : 1)};
}
`
