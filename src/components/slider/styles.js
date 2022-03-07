import styled from 'styled-components'

export const SliderContainer = styled.div`
  position: relative;
  height: 50vh;
`

export const ItemsContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  height: 100%;
`

export const Item = styled.div`
  display: grid;
  place-content: center;
  scroll-snap-align: center;
  flex-shrink: 0;
  width: 100%;
  border: 2px solid black;
  font-size: 2rem;
  font-weight: 900;
`

export const NavigationContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-content: center;
  justify-content: space-between;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`

export const NavigationItem = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  background: red;
  border-radius: 50%;
  cursor: pointer;
  pointer-events: all;
`

export const DotsContainer = styled.div`
  justify-self: center;
  display: grid;
  grid-auto-flow: column;
  gap: 0.3rem;

  position: absolute;
  bottom: 1rem;
`
export const Dot = styled.div`
  background: ${({ active }) => (active ? 'white' : 'black')};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  pointer-events: all;
`
