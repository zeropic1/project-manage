import React from 'react'
import PropTypes from 'prop-types'
import {
    Layout,
    Menu
} from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
} from '@ant-design/icons';
import {
  Link
} from 'react-router-dom'
import './App.css'
const { Sider } = Layout
const { SubMenu } = Menu;

function AppSider(props) {
    return (
      <Sider className="site-layout-background" width={200}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
            >
                {props.routes.map(({name, menus}, index) => {
                  return <SubMenu
                      key={`sub${index + 1}`}
                      title={
                          <span>
                              <LaptopOutlined />
                            {name}
                          </span>
                      }
                  >
                    {menus.map(({path, name}, menuIndex) => {
                      return <Menu.Item key={`sub${index + 1}-${menuIndex + 1}`}>
                          <UserOutlined />
                          <Link to={{
                              pathname: path,
                          }}>
                              <span className="nav-text">{name}</span>
                          </Link>
                      </Menu.Item>
                    })}
                  </SubMenu>
                })}
            </Menu>
        </Sider>
    )
}

AppSider.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string,
    menus: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      component: PropTypes.elementType.isRequired
    }))
  })).isRequired
}

export default AppSider

