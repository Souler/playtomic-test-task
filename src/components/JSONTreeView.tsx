import React from 'react'
import JSONTree, { JSONTreeProps } from 'react-json-tree'
import styled from 'styled-components'

const Container = styled.div`
  padding: 8px 16px;
  background-color: rgb(0, 43, 54);
  border-radius: 8px;
`

function JSONTreeView(props: JSONTreeProps) {
  return (
    <Container>
      <JSONTree {...props} />
    </Container>
  )
}

export default JSONTreeView
