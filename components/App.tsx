import React from 'react'
import styled from '@emotion/styled'

const Item = styled('div')`
  padding: 10px;
`

const Grid = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
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
    <Grid>
      <Item>
        <button onClick={handleAddition}>+</button>
      </Item>
      <Item>{number}</Item>
      <Item>
        <button disabled={number === 0} onClick={handleSubtraction}>
          -
        </button>
      </Item>
    </Grid>
  )
}

export default App
