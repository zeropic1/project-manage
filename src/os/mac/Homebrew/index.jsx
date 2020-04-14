import React from 'react'
import PropTypes from 'prop-types'
import {
    Typography,
    Table
} from 'antd'
import {
    StepList
} from '../../../component'
import {
    stepData
} from './StepData'
const { Title, Paragraph, Text } = Typography
const { Column } = Table;

function Homebrew(props) {
    const data = [
        {
            key: '1',
            operation: '安装软件',
            command: 'brew install git',
        },
        {
            key: '2',
            operation: '卸载软件',
            command: 'brew uninstall git',
        },
        {
            key: '3',
            operation: '搜索软件',
            command: 'brew search git',
        },
        {
            key: '4',
            operation: '显示已经安装软件列表',
            command: 'brew list',
        },
        {
            key: '5',
            operation: '更新软件',
            command: 'brew upgrade git',
        },
        {
            key: '6',
            operation: '显示软件内容信息',
            command: 'brew info git',
        },
        {
            key: '7',
            operation: '显示包依赖',
            command: 'brew deps',
        },
        {
            key: '8',
            operation: '查看那些已安装的程序需要更新',
            command: 'brew outdated',
        },
    ]

    return (
        <div>
            <Title level={2}> Homebrew国内的安装方法 </Title>
            <StepList stepList={stepData.steps1.stepList}
                contentList={stepData.steps1.contentList} />
            <Title level={2}> 安装homebrew-cask </Title>
            <Paragraph><Text code>homebrew-cask</Text>提供已经编译好的应用包(.dmg/.pkg),省却了下载、解压、拖拽等步骤,卸载也相对容易,包含很多AppStore没有的软件</Paragraph>
            <StepList stepList={stepData.steps2.stepList}
                contentList={stepData.steps2.contentList} />
            <Title level={2}> Homebrew 操作 </Title>
            <Table dataSource={data}>
                <Column title="操作" dataIndex="operation" key="operation" />
                <Column title="命令" dataIndex="command" key="command" />
            </Table>
            <Title level={2}>国内镜像源</Title>
            <Paragraph>
                <ul>
                    <li>
                        <a href="http://mirrors.ustc.edu.cn/help/brew.git.html">中科大镜像</a>
                    </li>
                    <li>
                        <a href="https://mirror.tuna.tsinghua.edu.cn/help/homebrew/">清华镜像</a>
                    </li>
                    <li>
                        <a href="https://developer.aliyun.com/mirror/homebrew?spm=a2c6h.13651102.0.0.3e221b11uLaG0Q">阿里巴巴镜像</a>
                    </li>
                </ul>
            </Paragraph>
        </div>
    )
}

Homebrew.propTypes = {

}

export default Homebrew

