import { SIDEBAR } from 'shared/constants/styles'
import styled, { css } from 'styled-components'

interface ISidebarWrapperProps {
  $isMenuOpen: boolean
  $isActive?: boolean
}

export const SidebarWrapper = styled.div<ISidebarWrapperProps>`
  flex: none;
  height: 100%;
  width: ${(props) => (props.$isMenuOpen ? '100%' : '0%')};

  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  transition: 0.5s;
`

export const SidebarContainer = styled.div<ISidebarWrapperProps>`
  transition: 0.2s all linear;
  position: absolute;
  padding-top: 20px;

  z-index: 11;

  width: ${(props) => (props.$isMenuOpen ? SIDEBAR.nav.openedWidth : SIDEBAR.nav.closedWidth)};
  background: black;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-inline-start: 38px;
`

export const SidebarDrawer = styled.div<ISidebarWrapperProps>`
  top: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  z-index: ${(props) => (props.$isMenuOpen ? 10 : 0)};
  width: ${(props) => (props.$isMenuOpen ? '100%' : 0)};
  transition: 0.2s all linear;

  background: transparent linear-gradient(90deg, #040404 0%, #040404fa 21%, #04040400 100%) 0% 0% no-repeat padding-box;
  opacity: ${(props) => (props.$isMenuOpen ? 1 : 0)};
`

export const NavMenu = styled.div`
  flex: 1;
  color: white;
  display: flex;
`

export const NavMenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  @media (max-width: 768px) {
    padding-bottom: 2rem;
    border-bottom: 1px solid #dddbe6;
  }
`

export const NavMenuListItem = styled.li<ISidebarWrapperProps>`
  position: relative;
  padding: 18px 32px;
  border-radius: 12px;
  transition: 0.3s;
  z-index: 2222;
  
  //max-width: 90%;
  &:hover {
    background: var(--unnamed-color-3b486d) 0% 0% no-repeat padding-box;
  }

  ${(props) =>
    props.$isActive
      ? css`
          &::after {
            content: '';
            z-index: 1;
            width: ${props.$isMenuOpen ? '100%' : '0%'};
            height: 100%;
            transition: 0.2s;
            background: ${props.$isMenuOpen ? 'var(--unnamed-color-3b486d) 0% 0% no-repeat padding-box' : ''};
            position: absolute;
            border-radius: 12px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `
      : ''}

  > a {
    position: relative;
  
  display: flex;
  align-items: center;
  //font: normal normal normal 3.6rem/4.3rem Tajawal;
  letter-spacing: 0px;
  color: #f1f1f1;
  text-decoration: none;
  z-index: 2;
  > .is-active {
    position: relative;
    z-index: 222;
    > img {
      position: relative;
      z-index: 222;

  }
  &::after {
    content: '';
    position: absolute;
    z-index: 21;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--unnamed-color-3b486d) 0% 0% no-repeat padding-box;
    width: 70px;
    height: 70px;
    display: block;
    border-radius: 50%;
  }
  }

  > .menu-item-title {
    transition: 0.3s all ease-in-out;
    margin-inline-start: 52px;
    white-space: nowrap;
    font-size: var(--unnamed-font-size-36);
    //font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-36)/var(--unnamed-line-spacing-43) var(--unnamed-font-family-tajawal);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-f1f1f1);
    text-align: left;
    max-height: 36px;
    line-height: initial;

    ${(props) =>
      !props.$isMenuOpen
        ? `
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      `
        : ''}
  }
 

  &:last-child {
    margin-bottom: 0;
  }
`

export const ProfileWrapper = styled.div<ISidebarWrapperProps>`
  white-space: nowrap;
  margin-bottom: 25px;

  ${(props) =>
    !props.$isMenuOpen
      ? `
      opacity: 0;
      // visibility: hidden;
      pointer-events: none; 
      `
      : ''}

  > img {
    width: 82px;
    height: 82px;
    border-radius: 50%;
    overflow: hidden;
  }

  > span {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-32) /
      var(--unnamed-line-spacing-30) var(--unnamed-font-family-tajawal);
    letter-spacing: var(--unnamed-character-spacing--0-32);
    color: var(--unnamed-color-f1f1f1);
    white-space: nowrap;
    ${(props) =>
      !props.$isMenuOpen
        ? `
      opacity: 0;
      // visibility: hidden;
      pointer-events: none; 
      `
        : ''}
  }
`

export const SearchBox = styled.div<ISidebarWrapperProps>`
  display: flex;
  padding: 18px 32px;

  & > input {
    padding: 0;
    margin-inline-start: 52px;
    background: transparent;
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    font-size: var(--unnamed-font-size-36);
    color: var(--unnamed-color-f1f1f1);

    max-height: 36px;
    line-height: initial;
    ::placeholder {
      color: var(--unnamed-color-f1f1f1);
    }

    ::-ms-input-placeholder {
      color: var(--unnamed-color-f1f1f1);
    }

    ${(props) =>
      !props.$isMenuOpen
        ? `
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      `
        : ''}
  }
`
