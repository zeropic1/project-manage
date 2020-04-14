import React from 'react'
import PropTypes from 'prop-types'
import {
    ListView
} from '../../component'

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
        <ListView list={list} />
    )
}

MacList.propTypes = {

}

export default MacList

