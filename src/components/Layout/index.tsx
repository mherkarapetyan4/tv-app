import React from 'react'

import useScreenSize from 'shared/hooks/useScreenSize'

import { LayoutWrapper } from './LayoutStyles'
import Sidebar from './Sidebar'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const size = useScreenSize()

  return (
    <LayoutWrapper>
      <Sidebar />
      {children}
    </LayoutWrapper>
  )
}

export default Layout
