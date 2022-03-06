import { useRef, useEffect, useState } from 'react'
import {
  SliderContainer,
  ItemsContainer,
  Item,
  NavigationContainer,
  NavigationItem,
} from './styles'

const Navigator = ({ children }) => {
  return <NavigationItem>{children}</NavigationItem>
}

const Slider = () => {
  const [observers, setObservers] = useState([])
  const itemsContainerRef = useRef()

  const handleObserver = (entradas) => {
    console.log(entradas)
  }
  const observador = new IntersectionObserver(handleObserver, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })
  useEffect(() => {
    itemsContainerRef.current.childNodes.forEach((item) => {
      observador.observe(item)
    })
  }, [itemsContainerRef])

  return (
    <SliderContainer>
      <ItemsContainer ref={itemsContainerRef} className="a">
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
      </ItemsContainer>

      <NavigationContainer>
        <Navigator>{'<'}</Navigator>
        <Navigator>{'>'}</Navigator>
        {/* <Dots></Dots> */}
      </NavigationContainer>
    </SliderContainer>
  )
}

export default Slider
