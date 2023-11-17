import { SIDEBAR } from 'shared/constants/styles'
import styled from 'styled-components'

export const SectionWrapper = styled.div`
  height: 300px;
  position: fixed;
  bottom: -20px;
  left: ${SIDEBAR.nav.closedWidth};
  right: 0;
  z-index: 2;
`

export const MovieCard = styled.div`
  padding: 5px;
  box-sizing: border-box;
  //width: 200px;
  height: 278px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  > img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`
