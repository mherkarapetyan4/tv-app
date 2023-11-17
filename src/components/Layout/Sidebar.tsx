import React from 'react'
import { useMenu } from 'shared/context/MenuContext'

import {
  NavMenu,
  NavMenuList,
  NavMenuListItem,
  ProfileWrapper,
  SearchBox,
  SidebarContainer,
  SidebarDrawer,
  SidebarWrapper,
} from './SidebarStyles'

interface IMenuItem {
  title: string
  icon: string
}

const MENU_ITEMS: IMenuItem[] = [
  { title: 'Home', icon: 'assets/icons/Group 46.png' },
  { title: 'TV shows', icon: 'assets/icons/Group 56.png' },
  { title: 'Movies', icon: 'assets/icons/Group 54.png' },
  { title: 'Genres', icon: 'assets/icons/Group 53.png' },
  { title: 'Watch Later', icon: 'assets/icons/Group 47.png' },
]

const Sidebar: React.FC = () => {
  const { isOpen, toggleMenu } = useMenu()

  return (
    <SidebarWrapper $isMenuOpen={isOpen}>
      <SidebarContainer
        $isMenuOpen={isOpen}
        onMouseOver={() => {
          toggleMenu()
        }}
        onMouseOut={() => toggleMenu()}
      >
        <ProfileWrapper $isMenuOpen={isOpen}>
          <img src={'assets/https_specials-8.png'} alt={'daniel'} />

          <span>Daniel</span>
        </ProfileWrapper>

        <SearchBox $isMenuOpen={isOpen}>
          <span>
            <img src={'assets/icons/ICON - Search.png'} />
          </span>
          <input type="text" placeholder="Search" />
        </SearchBox>
        <NavMenu>
          <NavMenuList>
            {MENU_ITEMS.map((el: IMenuItem, idx) => (
              <NavMenuListItem key={el.title} $isMenuOpen={isOpen} $isActive={idx === 2}>
                <a href="#">
                  <span className={`icon ${idx === 2 ? 'is-active' : ''}`}>
                    <img src={el.icon} />
                  </span>
                  <span className="menu-item-title">{el.title}</span>
                </a>
              </NavMenuListItem>
            ))}
          </NavMenuList>
        </NavMenu>
      </SidebarContainer>
      <SidebarDrawer $isMenuOpen={isOpen} />
    </SidebarWrapper>
  )
}

export default Sidebar
