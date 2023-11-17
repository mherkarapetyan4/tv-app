import React from 'react'
import MainScreen from 'screens/Main'
import { MenuProvider } from 'shared/context/MenuContext'
import styled from 'styled-components'

import useScreenSize from 'shared/hooks/useScreenSize'

import Layout from './Layout'

const WarningWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const RoutesRenderer: React.FC = () => {
  const size = useScreenSize()

  if (size[0] < 1280) {
    return (
      <WarningWrapper>
        <img src={'assets/fix.png'} />
      </WarningWrapper>
    )
  }
  return (
    <MenuProvider>
      <Layout>
        <MainScreen />
      </Layout>
    </MenuProvider>
  )
}

export default RoutesRenderer
