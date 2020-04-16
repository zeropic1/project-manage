import React from 'react'
import PropTypes from 'prop-types'
import {
    RouterListView
} from 'cl9-docs-component'

function NpmList(props) {
    const list = [
        {
            title: 'Publish',
            path: '/npm/publish'
        }
    ]

    return (
        <RouterListView list={list} />
    )
}

NpmList.propTypes = {

}

export default NpmList

