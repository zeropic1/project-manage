import React, { useState } from 'react'
import { Typography, Collapse, Card } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import {
  tabList as methodTabList,
  contentList as methodContentList,
} from './MethodTab'
import {
  tabList as requestHeadTabList,
  contentList as requestHeadContentList,
} from './RequestHeadTab'
import {
  tabList as statusCodeTabList,
  contentList as statusCodeContentList,
} from './StatusCodeTab'
import {
  tabList as resHeadTabList,
  contentList as resHeadContentList,
} from './ResponseHeadTab'
const { Title } = Typography
const { Panel } = Collapse

function OverView() {
  const [methodTab, setMethodTab] = useState('GET')
  const [reqHeadTab, setReqHeadTab] = useState('Host')
  const [statusCodeTab, setStatusCodeTab] = useState('10x')
  const [resHeadTab, setResHeadTab] = useState('Server')

  return (
    <div>
      <Title level={2}> 什么是HTTP </Title>
      <Collapse
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        className="site-collapse-custom-collapse"
      >
        <Panel
          header="HTTP是一种简单可扩展的协议，其Client-Server的结构以及轻松扩展头部信息的能力使得HTTP可以和Web共同发展。"
          key="1"
          className="site-collapse-custom-panel"
        >
          <ul>
            <li>简单</li>
            <li>
              可扩展,只要服务端和客户端就新 headers
              达成语义一致，新功能就可以被轻松加入进来
            </li>
            <li>
              无状态，有会话,HTTP本质是无状态的，使用Cookies可以创建有状态的会话
            </li>
          </ul>
        </Panel>
      </Collapse>
      <Title level={2} style={{ marginTop: 10 }}>
        {'HTTP的组成'}
      </Title>
      <Title level={3}> 报文格式 </Title>
      <Title level={4}> 请求报文格式 </Title>
      <img
        src="http://yuml.me/diagram/scruffy/class/
[请求报文格式]->[Start Line | GET /background.png HTTP/1.1 {bg:cornsilk}],[请求报文格式]->[Request Headers],[请求报文格式]->[Request Body]"
      />
      <Card title="请求行">
        <img
          src="http://yuml.me/diagram/scruffy/class/
[Start Line]->[HTTP Method | GET;PUT;POST;DELETE {bg:cornsilk}],[Start Line]->[Request Target | /background.png {bg:cornsilk}],
[Start Line]->[HTTP Version | HTTP/1.1 {bg:cornsilk}]"
        />
        <Card
          title="HTTP Method"
          tabList={methodTabList}
          activeTabKey={methodTab}
          onTabChange={(key) => {
            setMethodTab(key)
          }}
        >
          {methodContentList[methodTab]}
        </Card>
      </Card>
      <Card title="请求头">
        <Card
          title="Request Headers"
          tabList={requestHeadTabList}
          activeTabKey={reqHeadTab}
          onTabChange={(key) => {
            setReqHeadTab(key)
          }}
        >
          {requestHeadContentList[reqHeadTab]}
        </Card>
      </Card>
      <Card title="请求体">仅POST和PUT请求需要发送请求体</Card>
      <Title level={4}> 响应报文格式 </Title>
      <img
        src="http://yuml.me/diagram/scruffy/class/
[响应报文格式]->[Status Line | HTTP/2 200  {bg:cornsilk}],[响应报文格式]->[Response Headers],[响应报文格式]->[Response Body]"
      />
      <Card title="状态行">
        <img
          src="http://yuml.me/diagram/scruffy/class/
          [Status Line]->[HTTP Version | HTTP/1.1 {bg:cornsilk}],[Status Line]->[Status Code | 10x;20x;30x;40x;50x {bg:cornsilk}],
          [Status Line]->[Status Text | OK {bg:cornsilk}]"
        />
        <Card
          title="Status Code"
          tabList={statusCodeTabList}
          activeTabKey={statusCodeTab}
          onTabChange={(key) => {
            setStatusCodeTab(key)
          }}
        >
          {statusCodeContentList[statusCodeTab]}
        </Card>
      </Card>
      <Card title="响应头">
        <Card
          title="Request Headers"
          tabList={resHeadTabList}
          activeTabKey={resHeadTab}
          onTabChange={(key) => {
            setResHeadTab(key)
          }}
        >
          {resHeadContentList[resHeadTab]}
        </Card>
      </Card>
      <Card title="响应体"></Card>
    </div>
  )
}

export default OverView
