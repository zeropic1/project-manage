import React from 'react'
import { Typography } from 'antd'
import { StepList } from 'cl9-docs-component'
import { stepData } from './StepData'
const { Title } = Typography

function CombineCommits() {
  return (
    <div>
      <Title> 使用rebase修改commit </Title>
      <Title level={2}> rebase合并远程仓库的多个commits </Title>
      <StepList
        stepList={stepData.steps1.stepList}
        contentList={stepData.steps1.contentList}
      />
    </div>
  )
}

export default CombineCommits
