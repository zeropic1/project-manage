import React from 'react'
import { HighlightCode } from 'cl9-docs-component'

export const tabList = [
  {
    key: 'Host',
    tab: 'Host',
  },
  {
    key: 'Content-Type',
    tab: <p style={{ background: '#e4f0f5' }}>Content-Type</p>,
  },
  {
    key: 'Content-Length',
    tab: <p style={{ background: '#e4f0f5' }}>Content-Length</p>,
  },
  {
    key: 'Accept',
    tab: 'Accept',
  },
  {
    key: 'User-Agent',
    tab: 'User-Agent',
  },
]

export const contentList = {
  Host: (
    <p>
      目标主机，用于目标服务器定位子服务器
      <HighlightCode language="http">
        Host: jsonplaceholder.typicode.com
      </HighlightCode>
    </p>
  ),
  'Content-Type': (
    <div>
      <p>
        请求体的内容类型
        <HighlightCode language="http">
          Content-Type: application/json; charset=utf-8
        </HighlightCode>
      </p>
      <p>常用</p>
      <ul>
        <li>
          text/html
          <HighlightCode language="http">
            {`
<!DOCTYPE html><title>Content of a.html.</title>
           `}
          </HighlightCode>
        </li>
        <li>
          application/x-www-form-urlencoded,HTML表单提交方式
          <HighlightCode language="http">
            {`
username=admin&password=123
           `}
          </HighlightCode>
        </li>
        <li>
          multipart/form-data
          <HighlightCode language="http">
            {`
Content-Type: multipart/form-data; boundary=---------------------------9051914041544843365972754266
Content-Length: 554

-----------------------------9051914041544843365972754266
Content-Disposition: form-data; name="text"

text default
-----------------------------9051914041544843365972754266
Content-Disposition: form-data; name="file1"; filename="demo.jpeg"
Content-Type: image/jpeg

FPSEjss89impKL...

-----------------------------9051914041544843365972754266
Content-Disposition: form-data; name="file2"; filename="a.html"
Content-Type: text/html

<!DOCTYPE html><title>Content of a.html.</title>

-----------------------------9051914041544843365972754266--
           `}
          </HighlightCode>
        </li>
        <li>
          application/json
          <HighlightCode language="json">
            {`
{"username":"admin","password":"123"}
           `}
          </HighlightCode>
        </li>
      </ul>
    </div>
  ),
  'Content-Length': (
    <p>
      请求体的内容长度
      <HighlightCode language="http">Content-Length: 60</HighlightCode>
    </p>
  ),
  Accept: (
    <p>
      指定客户端能够接收的内容类型
      <HighlightCode language="http">Accept: */*</HighlightCode>
    </p>
  ),
  'User-Agent': (
    <p>
      指明发送请求的用户代理，例如：浏览器、手机
      <HighlightCode language="http">
        User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6)
        AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
      </HighlightCode>
    </p>
  ),
}
