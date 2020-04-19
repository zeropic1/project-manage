import React from 'react'
import { Typography } from 'antd'
import { StepList } from 'cl9-docs-component'
import { stepData } from './StepData'
const { Title } = Typography

function UpdateCommits() {
  return (
    <div>
      <Title level={2}> 修改本地最近一次提交的消息 </Title>
      <StepList
        stepList={stepData.steps1.stepList}
        contentList={stepData.steps1.contentList}
      />
      <Title level={2}> 修改远程仓库最近一次推送提交的消息 </Title>
      <StepList
        stepList={stepData.steps2.stepList}
        contentList={stepData.steps2.contentList}
      />
      <Title level={2}> 修改多个提交的消息 </Title>
      <StepList
        stepList={stepData.steps3.stepList}
        contentList={stepData.steps3.contentList}
      />
    </div>
  )
}

export default UpdateCommits
