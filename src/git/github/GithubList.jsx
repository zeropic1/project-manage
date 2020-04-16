import React from 'react'
import {
    RouterListView
} from 'cl9-docs-component'

function GithubList(props) {
    const list = [
        {
            title: 'UploadLocalRepo',
            path: '/git/github/uploadLocalRepo'
        },
        {
            title: 'CoordinateWorkFlow',
            path: '/git/github/coordinateWorkFlow'
        }
    ]

    return (
        <RouterListView list={list} />
    )
}

export default GithubList

