import React from 'react'
import { HighlightCode } from 'cl9-docs-component'

export const tabList = [
  {
    key: '10x',
    tab: '10x',
  },
  {
    key: '20x',
    tab: '20x',
  },
  {
    key: '30x',
    tab: '30x',
  },
  {
    key: '40x',
    tab: '40x',
  },
  {
    key: '50x',
    tab: '50x',
  },
]

export const contentList = {
  '10x': (
    <div>
      临时性消息
      <ul>
        <li>100（继续发送）</li>
        <li>101（正在切换协议）</li>
      </ul>
    </div>
  ),
  '20x': (
    <div>
      成功
      <ul>
        <li>
          200（OK）表明请求已经成功. 默认情况下状态码为200的响应可以被缓存。
          不同请求方式对于请求成功的意义如下:
          <ul>
            <li>GET: 已经取得资源，并将资源添加到响应的消息体中。</li>
            <li>HEAD: 响应的消息体为头部信息。</li>
            <li>POST: 响应的消息体中包含此次请求的结果。</li>
            <li>TRACE: 响应的消息体中包含服务器接收到的请求信息。</li>
          </ul>
          <p>
            <strong>
              PUT 和 DELETE 的请求成功通常并不是响应200 OK的状态码而是 204 No
              Content 表示无内容(或者 201 Created表示一个资源首次被创建成功)。
            </strong>
          </p>
        </li>
        <li>
          201（创建成功）表示新的资源在应答返回之前已经被创建。同时新增的资源会在应答消息体中返回，其地址或者是原始请求的路径，或者是
          Location 首部的值。
          <p>
            <strong>这个状态码的常规使用场景是作为 POST 请求的返回值。</strong>
          </p>
        </li>
      </ul>
    </div>
  ),
  '30x': (
    <div>
      重定向
      <ul>
        <li>301（永久移动）</li>
        <li>302（暂时移动）</li>
        <li>304（内容未改变）</li>
      </ul>
    </div>
  ),
  '40x': (
    <div>
      客户端错误
      <ul>
        <li>400（客户端请求错误）</li>
        <li>401（认证失败）</li>
        <li>403（被禁止）</li>
        <li>404（找不到内容）</li>
      </ul>
    </div>
  ),
  '50x': (
    <div>
      服务端错误
      <ul>
        <li>500（服务器内部错误）</li>
      </ul>
    </div>
  ),
}
