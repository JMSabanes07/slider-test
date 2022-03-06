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
  scroll-snap-align: center;
  flex-shrink: 0;
  width: 100%;
  border: 2px solid black;
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
