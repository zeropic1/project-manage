import React from 'react'
import PropTypes from 'prop-types'
import './App.css'
import {
    Layout
} from 'antd'
import {
    Switch,
    Route,
} from 'react-router-dom'
import {
    UploadLocalRepo,
    CoordinateWorkFlow,
    GitList,
    GithubList
} from './git'
import Main from './Main'
const { Content } = Layout

function AppContent(props) {
    return (
        <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path='/git' component={GitList} />
                    <Route exact path='/git/github' component={GithubList} />
                    <Route exact path='/git/github/uploadLocalRepo' component={UploadLocalRepo} />
                    <Route exact path='/git/github/coordinateWorkFlow' component={CoordinateWorkFlow} />
                </Switch>
            </div>
        </Content>
    )
}

AppContent.propTypes = {

}

export default AppContent

