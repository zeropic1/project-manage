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
                        <span className="nav-text">git</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <VideoCameraOutlined />
                    <span className="nav-text">nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <UploadOutlined />
                    <span className="nav-text">nav 3</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <UserOutlined />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

AppSider.propTypes = {

}

export default AppSider

