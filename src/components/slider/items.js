import { useEffect } from 'react'
import { ItemsContainer, Item } from './styles'

const Items = ({ container, items, setInView }) => {
  const randomColor = () => '#' + (((1 << 24) * Math.random()) | 0).toString(16)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(parseInt(entry.target.id))
          }
        })
      },
      {
        root: container.target,
        threshold: 0.5,
      }
    )

    items.current.forEach((item) => {
      observer.observe(item)
      item.setAttribute('style', `background: ${randomColor()}`)
    })
  }, [])

  return (
    <ItemsContainer ref={container} className="a">
      {[1, 2, 3, 4, 5, 6, 7].map((item, i) => {
        return (
          <Item key={i} ref={(e) => (items.current[i] = e)} id={i}>
            {item}
          </Item>
        )
      })}
    </ItemsContainer>
  )
}

export default Items
