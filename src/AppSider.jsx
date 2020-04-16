import React from 'react'
import PropTypes from 'prop-types'
import {
    Layout,
    Menu
} from 'antd'
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from '@ant-design/icons'
import {
    Link
} from 'react-router-dom'
const { Sider } = Layout

function AppSider(props) {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <UserOutlined />
                    <Link to={{
                        pathname: '/git',
                    }}>
                        <span className="nav-text">Git</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <VideoCameraOutlined />
                    <Link to={{
                        pathname: '/os',
                    }}>
                        <span className="nav-text">OS</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <VideoCameraOutlined />
                    <Link to={{
                        pathname: '/npm',
                    }}>
                        <span className="nav-text">NPM</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

AppSider.propTypes = {

}

export default AppSider

