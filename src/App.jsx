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
    Link,
    withRouter
} from 'react-router-dom'
import routes from './routes'
const { Header, Footer } = Layout


function App(props) {
    const BreadCrumbsWithRouter =  withRouter(props => {
      const { location } = props;
      const crumbs = routes
      // Get all routes that contain the current one.
      .filter(({ path }) => location.pathname.includes(path))
      // Swap out any dynamic routes with their param values.
      // E.g. "/pizza/:pizzaId" will become "/pizza/1"
      .map(({ path, ...rest }) => ({
        path: Object.keys(props.match.params).length
          ? Object.keys(props.match.params).reduce(
             (path, param) => path.replace(
               `:${param}`, props.match.params[param]
             ), path
            )
          : path,
        ...rest
      }));
      console.log(crumbs)
      const extraBreadcrumbItems = crumbs.map((item, index) => {
        return (
          <Breadcrumb.Item key={item.path}>
            {index === crumbs.length -1 ? <span>{item.name}</span> : <Link to={item.path}>{item.name}</Link>}
          </Breadcrumb.Item>
        );
      });
      return (
        <Layout className="App">
            <AppSider />
            <Layout className="content">
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} >
                    <Breadcrumb separator=">">
                        {extraBreadcrumbItems}
                    </Breadcrumb>
                </Header>
                <AppContent style={{ flex: 1 }} />
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
      );
    });

    return (
        <Router>
          <BreadCrumbsWithRouter/>
        </Router>
    )
}

App.propTypes = {

}

export default App

