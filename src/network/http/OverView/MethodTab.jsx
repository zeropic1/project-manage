import React from 'react'
import { HighlightCode } from 'cl9-docs-component'

export const tabList = [
  {
    key: 'GET',
    tab: 'GET',
  },
  {
    key: 'POST',
    tab: 'POST',
  },
  {
    key: 'PUT',
    tab: 'PUT',
  },
  {
    key: 'DELETE',
    tab: 'DELETE',
  },
  {
    key: 'HEAD',
    tab: 'HEAD',
  },
]

export const contentList = {
  GET: (
    <div>
      <ul>
        <li> 获取资源 </li> <li> 对服务器数据不进行修改 </li>
        <li> 不发送请求体 </li>
        <li>
          curl命令
          <HighlightCode language="bash">
            {`
curl -v https://jsonplaceholder.typicode.com/posts/1
            `}
          </HighlightCode>
        </li>
        <li>
          请求头
          <HighlightCode language="http">
            {`
GET /posts/1 HTTP/2
Host: jsonplaceholder.typicode.com
User-Agent: curl/7.54.0
Accept: */*        
           `}
          </HighlightCode>
        </li>
      </ul>
    </div>
  ),
  POST: (
    <div>
      <ul>
        <li> 用于增加或修改资源 </li> <li> 发送内容写在请求体 </li>
        <li>
          curl命令
          <HighlightCode language="bash">
            {`
curl -v -H "Content-Type:application/json; charset=UTF-8" -d '{"title":"foo","body":"bar","userId":1}' https://jsonplaceholder.typicode.com/post
           `}
          </HighlightCode>
        </li>
        <li>
          请求头
          <HighlightCode language="http">
            {`
POST /post HTTP/2
Host: jsonplaceholder.typicode.com
User-Agent: curl/7.54.0
Content-Type:application/json; charset=UTF-8
Accept:application/json; charset=UTF-8
Content-Length: 39        
           `}
          </HighlightCode>
        </li>
      </ul>
    </div>
  ),
  PUT: (
    <div>
      <ul>
        <li> 用于修改资源 </li> <li> 发送内容写在请求体 </li>
        <li>
          curl命令
          <HighlightCode language="bash">
            {`
curl -v -X PUT -H "Content-Type:application/json; charset=UTF-8" -d '{"id":1,"title":"foo","body":"bar","userId":1}' https://jsonplaceholder.typicode.com/posts/1
           `}
          </HighlightCode>
        </li>
        <li>
          请求头
          <HighlightCode language="http">
            {`
PUT /posts/1 HTTP/2
Host: jsonplaceholder.typicode.com
User-Agent: curl/7.54.0
Accept: */*
Content-Type:application/json; charset=UTF-8
Content-Length: 46
            `}
          </HighlightCode>
        </li>
      </ul>
    </div>
  ),
  DELETE: (
    <div>
      <ul>
        <li> 用于删除资源 </li> <li> 不发送请求体 </li>
        <li>
          curl命令
          <HighlightCode language="bash">
            {`
curl -v -X DELETE https://jsonplaceholder.typicode.com/posts/1
           `}
          </HighlightCode>
        </li>
        <li>
          请求头
          <HighlightCode language="http">
            {`
DELETE /posts/1 HTTP/2
Host: jsonplaceholder.typicode.com
User-Agent: curl/7.54.0
Accept: */*
           `}
          </HighlightCode>
        </li>
      </ul>
    </div>
  ),
  HEAD: (
    <ul>
      <li> 和GET使用方法完全相同 </li> <li> 唯一区别在于返回没有响应体 </li>
    </ul>
  ),
}
