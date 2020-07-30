import React from 'react'
import {
  LaptopOutlined,
  AppleOutlined,
  GithubOutlined,
  UploadOutlined,
} from '@ant-design/icons'

export default [
  {
    name: 'Git',
    icon: <LaptopOutlined />,
    menus: [
      {
        path: '/git/github',
        name: 'Github',
        icon: <GithubOutlined />,
      },
      {
        path: '/git/command',
        name: 'Command',
        icon: <GithubOutlined />,
      },
    ],
  },
  {
    name: 'OS',
    icon: <LaptopOutlined />,
    menus: [
      {
        path: '/os/mac',
        name: 'Mac',
        icon: <AppleOutlined />,
      },
    ],
  },
  {
    name: 'NPM',
    icon: <LaptopOutlined />,
    menus: [
      {
        path: '/npm/publish',
        name: 'Publish',
        icon: <UploadOutlined />,
      },
    ],
  },
  {
    name: 'Network',
    icon: <LaptopOutlined />,
    menus: [
      {
        path: '/network/http',
        name: 'HTTP',
        icon: <UploadOutlined />,
      },
    ],
  },
]
