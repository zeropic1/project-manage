import React from 'react'
import { RouterListView } from 'cl9-docs-component'

function HttpList(props) {
  const list = [
    {
      title: 'OverView',
      path: '/network/http/OverView',
    },
  ]

  return <RouterListView list={list} />
}

export default HttpList
