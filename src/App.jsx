import React from 'react'
import PropTypes from 'prop-types'
import {
    Layout,
    Breadcrumb
} from 'antd'
import AppContent from './AppContent'
import AppSider from './AppSider'
import './App.css'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
const { Header, Footer } = Layout


function App(props) {
    const getBreadCrumbs = () => {
        const { location } = props;
        console.log(props)
        if (!location) {
            return null
        }
        const pathSnippets = location.pathname && location.pathname.split('/').filter(i => i);
        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>{url}</Link>
                </Breadcrumb.Item>
            );
        });
        return extraBreadcrumbItems
    }

    return (
        <Layout className="App">
            <Router>
                <AppSider />
                <Layout className="content">
                    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} >
                        <Breadcrumb separator=">">
                            {
                                getBreadCrumbs()
                            }
                        </Breadcrumb>
                    </Header>
                    <AppContent style={{ flex: 1 }} />
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Router>
        </Layout>
    )
}

App.propTypes = {

}

export default App

