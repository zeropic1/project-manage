import React from 'react'
import PropTypes from 'prop-types'
import {
    RouterListView
} from 'cl9-docs-component'

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

    return (
        <RouterListView list={list} />
    )
}

MacList.propTypes = {

}

export default MacList

