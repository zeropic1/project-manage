import React from 'react'
import PropTypes from 'prop-types'
import {
    ListView
} from '../../component'

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
        <ListView list={list} />
    )
}

GithubList.propTypes = {

}

export default GithubList

