import React from 'react'
import { HighlightCode } from 'cl9-docs-component'

export const tabList = [
  {
    key: 'Server',
    tab: 'Server',
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
    key: 'Accept-Ranges',
    tab: 'Accept-Ranges',
  },
  {
    key: 'Set-Cookie',
    tab: 'Set-Cookie',
  },
]

export const contentList = {
  Server: (
    <p>
      源头服务器所用到的软件相关信息
      <HighlightCode language="http">Server: cloudflare</HighlightCode>
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
  'Accept-Ranges': (
    <p>
      当浏览器发现 Accept-Ranges
      头时，可以尝试继续中断了的下载，而不是重新开始。
      <HighlightCode language="http">Accept-Ranges: bytes</HighlightCode>
    </p>
  ),
  'Set-Cookie': (
    <div>
      <p>用来由服务器端向客户端发送 cookie。</p>
      <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie">
        MDN Set-Cookie
      </a>
    </div>
  ),
}
