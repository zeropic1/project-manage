import React from 'react'
import { RouterListView } from 'cl9-docs-component'

function PublishList(props) {
  const list = [
    {
      title: 'PublishReact',
      path: '/npm/publish/react'
    }
  ]

  return <RouterListView list={list} />
}

export default PublishList
