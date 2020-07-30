import React from 'react'
import { Typography, Collapse, List, Card } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
const { Title } = Typography
const { Panel } = Collapse
const { Meta } = Card

const data = [
  { title: '请求行', content: 'GET /' },
  { title: '请求头', content: '' },
  { title: '请求体', content: '' },
]

function OverView() {
  return (
    <div>
      <Title level={2}> 什么是HTTP </Title>
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        className="site-collapse-custom-collapse"
      >
        <Panel
          header="This is panel header 1"
          key="1"
          className="site-collapse-custom-panel"
        >
          <p>{123213123}</p>
        </Panel>
      </Collapse>
      <Title level={3}> 报文格式 </Title>
      <Title level={4}> 请求报文格式 </Title>
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>
              <img
                src="http://yuml.me/diagram/scruffy/class/
[CommandRouterComponent]uses -.->[CommandProcessor]"
              />
            </Card>
          </List.Item>
        )}
      />
      <Title level={4}> 响应报文格式 </Title>
    </div>
  )
}

export default OverView
