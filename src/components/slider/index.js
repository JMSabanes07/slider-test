import { useRef, useEffect, useState } from 'react'
import {
  SliderContainer,
  ItemsContainer,
  Item,
  NavigationContainer,
  NavigationItem,
  DotsContainer,
  Dot,
} from './styles'

const Navigator = ({ children, onClick }) => {
  return <NavigationItem onClick={onClick}>{children}</NavigationItem>
}

const Slider = () => {
  const [inView, setInView] = useState()
  const container = useRef()
  const items = useRef([])

  const randomColor = () => '#' + (((1 << 24) * Math.random()) | 0).toString(16)

  const slideRight = () => {
    const next = inView.nextSibling
    const first = items.current[0]
    if (!next) return first?.scrollIntoView({ behavior: 'smooth' })
    next?.scrollIntoView({ behavior: 'smooth' })
  }
  const slideLeft = () => {
    const prev = inView.previousSibling
    const last = items.current[items.current.length - 1]
    if (!prev) return last?.scrollIntoView({ behavior: 'smooth' })
    prev?.scrollIntoView({ behavior: 'smooth' })
  }
  const slideTo = (item) => {
    item?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(entry.target)
          }
        })
      },
      {
        root: container.target,
        threshold: 0.9,
      }
    )
    items.current.forEach((item) => {
      observer.observe(item)
      item.setAttribute('style', `background: ${randomColor()}`)
    })
  }, [])

  return (
    <SliderContainer>
      <ItemsContainer ref={container} className="a">
        {[1, 2, 3, 4, 5, 6, 7].map((item, i) => {
          return (
            <Item key={i} ref={(e) => (items.current[i] = e)}>
              {item}
            </Item>
          )
        })}
      </ItemsContainer>

      <NavigationContainer>
        <Navigator onClick={slideLeft}>{'<'}</Navigator>
        <Navigator onClick={slideRight}>{'>'}</Navigator>
        <DotsContainer>
          {items.current.map((item, i) => (
            <Dot
              key={i}
              active={inView === item}
              onClick={() => slideTo(item)}
            />
          ))}
        </DotsContainer>
      </NavigationContainer>
    </SliderContainer>
  )
}

export default Slider
