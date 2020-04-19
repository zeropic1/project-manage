import React from 'react'
import { RouterListView } from 'cl9-docs-component'

function MacList(props) {
  const list = [
    {
      title: 'Homebrew',
      path: '/os/mac/homebrew'
    },
    {
      title: 'Zsh',
      path: '/os/mac/zsh'
    }
  ]

  return <RouterListView list={list} />
}

export default MacList
