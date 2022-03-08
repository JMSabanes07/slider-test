import {
  NavigationContainer,
  NavigationItem,
  DotsContainer,
  Dot,
} from './styles'

const Navigation = ({ items, inView }) => {
  const slideTo = (item) => {
    item?.scrollIntoView({ behavior: 'smooth' })
  }

  const slideRight = () => {
    const next = items.current[inView + 1]
    const first = items.current[0]

    if (!next) return slideTo(first)
    slideTo(next)
  }

  const slideLeft = () => {
    const prev = items.current[inView - 1]
    const last = items.current[items.current.length - 1]

    if (!prev) return slideTo(last)
    slideTo(prev)
  }

  return (
    <NavigationContainer>
      <NavigationItem onClick={slideLeft}>{'<'}</NavigationItem>
      <NavigationItem onClick={slideRight}>{'>'}</NavigationItem>
      <DotsContainer>
        {items.current.map((item, i) => (
          <Dot key={i} active={inView === i} onClick={() => slideTo(item)} />
        ))}
      </DotsContainer>
    </NavigationContainer>
  )
}

export default Navigation
