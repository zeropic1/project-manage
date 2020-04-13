import React from 'react'
import PropTypes from 'prop-types'
import {
    ListView
} from '../component'

function GitList(props) {
    const list = [
        {
            title: 'github',
            path: '/git/github'
        }
    ]

    return (
        <ListView list={list} />
    )
}

GitList.propTypes = {

}

export default GitList

