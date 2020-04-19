import React from 'react'
import { RouterListView } from 'cl9-docs-component'

function CommandList(props) {
  const list = [
    {
      title: 'CombineCommits',
      path: '/git/command/combineCommits'
    },
    {
      title: 'UploadCommits',
      path: '/git/command/updateCommits'
    }
  ]

  return <RouterListView list={list} />
}

export default CommandList
