import { PropsWithChildren, createContext, useContext, useState } from 'react'

export interface IMenuContext {
  isOpen: boolean
  toggleMenu: () => void
}
export const MenuContext = createContext<IMenuContext | null>(null)

export const MenuProvider = ({ children }: PropsWithChildren<{ children: React.ReactNode }>) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    // return
    setIsOpen((prev) => !prev)
  }
  return (
    <MenuContext.Provider
      value={{
        isOpen,
        toggleMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
export const useMenu = () => {
  const menuContext = useContext(MenuContext)

  if (!menuContext) {
    throw new Error('menuContext has to be used within <CurrentUserContext.Provider>')
  }

  return menuContext
}
