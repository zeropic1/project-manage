import React from 'react'
import PropTypes from 'prop-types'
import {
    RouterListView
} from 'cl9-docs-component'

function GitList(props) {
    const list = [
        {
            title: 'Github',
            path: '/git/github'
        }
    ]

    return (
        <RouterListView list={list} />
    )
}

GitList.propTypes = {

}

export default GitList

