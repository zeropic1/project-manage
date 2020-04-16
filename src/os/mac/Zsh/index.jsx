import React from 'react'
import PropTypes from 'prop-types'
import {
    Typography,
    Table
} from 'antd'
import {
    StepList
} from 'cl9-docs-component'
import {
    stepData
} from './StepData'
const { Title, Paragraph, Text } = Typography
const { Column } = Table;

function Zsh(props) {
    const data = [
        {
            key: "1",
            plugin: "git",
            install: "自带",
            description: "git命令的alias,查看所有的git命令alias:'~/.oh-my-zsh/plugins/git/git.plugin.zsh'"
        },
        {
            key: "2",
            plugin: "z",
            install: "自带",
            description: "快速跳转到访问过的文件夹"
        },
        {
            key: "3",
            plugin: "zsh-autosuggestions",
            install: "git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions",
            description: "输入命令时，会用浅色字体给出建议的命令,按 → 即可自动补全"
        },
        {
            key: "4",
            plugin: "zsh-syntax-highlighting",
            install: "git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting",
            description: "输入正确的常用命令会以绿色高亮显示,输入错误则会显示其他的颜色"
        },
        {
            key: "5",
            plugin: "extract",
            install: "自带",
            description: "功能强大的解压插件,所有类型的文件解压一个命令x全搞定"
        },
        {
            key: "6",
            plugin: "gitignore",
            install: "自带",
            description: "提供一条 gi 命令,用来查询 gitignore 模板,比如你新建了一个 python 项目,就可以用'gi python > .gitignore'"
        },
        {
            key: "7",
            plugin: "git-open",
            install: "git clone https://github.com/paulirish/git-open.git $ZSH_CUSTOM/plugins/git-open",
            description: "在终端里打开当前项目的远程仓库地址,github地址(https://github.com/paulirish/git-open)"
        },
    ]

    return (
        <div>
            <Title level={2}> 使用 zsh </Title>
            <StepList stepList={stepData.steps1.stepList}
                contentList={stepData.steps1.contentList} />
            <Title level={2}> oh-my-zsh 安装与使用 </Title>
            <StepList stepList={stepData.steps2.stepList}
                contentList={stepData.steps2.contentList} />
            <Title level={2}> oh-my-zsh 常用插件 </Title>
            <Table dataSource={data}>
                <Column title="插件" dataIndex="plugin" key="plugin" />
                <Column title="安装" dataIndex="install" key="install" />
                <Column title="描述" dataIndex="description" key="description" />
            </Table>
        </div>
    )
}

Zsh.propTypes = {

}

export default Zsh

