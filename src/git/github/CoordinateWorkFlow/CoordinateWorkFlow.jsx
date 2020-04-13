import React from 'react'
import PropTypes from 'prop-types'
import {
    Typography,
} from 'antd'
import {
    StepList
} from '../../../component'
import {
    data
} from './StepData'
const { Title } = Typography

function CoordinateWorkFlow(props) {

    return (
        <div >
            <Title> github协同开发流程 </Title>
            <Title level={2}> Fork一个github仓库,例如 cl9/react-hooks-demo</Title>
            <StepList stepList={data.steps1.stepList}
                contentList={data.steps1.contentList} />
            <Title level={2}> 向Fork的仓库(cl9/react-hooks-demo)提交pull and request </Title>
            <StepList stepList={data.steps2.stepList}
                contentList={data.steps2.contentList} />
        </div>
    )
}

CoordinateWorkFlow.propTypes = {

}

export default CoordinateWorkFlow

