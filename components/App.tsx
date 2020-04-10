import React from 'react'
import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 50px 50px;
  grid-gap: 5px;
`

interface Props {
  initialNumber: number
}

const App: React.FunctionComponent<Props> = ({ initialNumber }) => {
  const [number, setNumber] = React.useState(initialNumber)

  function handleAddition() {
    setNumber(number + 1)
  }

  function handleSubtraction() {
    setNumber(number - 1)
  }

  return (
    <>
      <Grid>
        <Item></Item>
        <Item></Item>
        <Item>
          <button onClick={handleAddition}>+</button>
        </Item>
        <Item>
          <div>{number}</div>
        </Item>
        <Item>
          <button disabled={number === 0} onClick={handleSubtraction}>
            -
          </button>
        </Item>
      </Grid>
    </>
  )
}

export default App
