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
const { Content } = Layout

function AppContent(props) {
    return (
        <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Switch>
                  {props.routes.map(({ path, component }, key) => (
                    <Route exact path={path} key={key} render={component} />
                  ))}
                </Switch>
            </div>
        </Content>
    )
}

AppContent.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      component: PropTypes.elementType.isRequired
    }))
}

export default AppContent

