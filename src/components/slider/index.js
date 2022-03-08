import { useRef, useEffect, useState } from 'react'
import { SliderContainer } from './styles'
import Items from './items'
import Navigation from './navigation'

const Slider = () => {
  const [inView, setInView] = useState()
  const container = useRef()
  const items = useRef([])

  return (
    <SliderContainer>
      <Items container={container} items={items} setInView={setInView} />
      <Navigation items={items} inView={inView} />
    </SliderContainer>
  )
}

export default Slider
