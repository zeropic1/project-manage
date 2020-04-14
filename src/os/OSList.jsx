import React from 'react'
import PropTypes from 'prop-types'
import {
    ListView
} from '../component'

function OSList(props) {
    const list = [
        {
            title: 'Mac',
            path: '/os/mac'
        }
    ]

    return (
        <ListView list={list} />
    )
}

OSList.propTypes = {

}

export default OSList

