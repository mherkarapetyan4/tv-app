import { useLayoutEffect, useState } from 'react'

const useScreenSize = () => {
  const [size, setSize] = useState([window.screen.width, 0])

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.screen.height])
    }

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return size
}

export default useScreenSize
