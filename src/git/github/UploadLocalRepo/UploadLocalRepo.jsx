import React from 'react'
import PropTypes from 'prop-types'
import {
    Typography,
} from 'antd'
import './index.css'
import {
    StepList
} from 'cl9-docs-component'
const { Title } = Typography

function UploadLocalRepo(props) {
    const data = require('./index.json')

    return (
        <div >
            <Title> 将本地仓库上传到github </Title>
            <Title level={2}> 远程仓库是个空仓库 </Title>
            <StepList stepList={data.steps1.stepList}
                contentList={data.steps1.contentList} />
            <Title style={{ marginTop: 20 }} level={2}> 远程仓库不是个空仓库， 例如包含了README、 LICENSE或是其他 </Title>
            <StepList stepList={data.steps2.stepList}
                contentList={data.steps2.contentList} />
        </div>
    )
}

UploadLocalRepo.propTypes = {

}

export default UploadLocalRepo