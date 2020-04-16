import React from 'react'
import PropTypes from 'prop-types'
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

GithubList.propTypes = {

}

export default GithubList

