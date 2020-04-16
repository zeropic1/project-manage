import React from 'react'
import PropTypes from 'prop-types'
import {
    Typography,
} from 'antd'
import {
    StepList
} from 'cl9-docs-component'
import {
    data
} from './StepData'
const { Title } = Typography

function PublishReact(props) {

    return (
        <div >
            <Title level={2}> 在npm上发布你的React组件库 </Title>
            <StepList stepList={data.steps1.stepList}
                contentList={data.steps1.contentList} />
            <Title level={2}> 参考 </Title>
            <ul>
                <li><a href="https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220" target="_blank"  rel="noopener noreferrer">A guide to building a React component with webpack 4, publishing to npm, and deploying the demo to GitHub Pages</a></li>
                <li><a href="https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/" target="_blank"  rel="noopener noreferrer">The complete guide to publishing a React package to npm</a></li>
            </ul>
        </div>
    )
}

PublishReact.propTypes = {

}

export default PublishReact

