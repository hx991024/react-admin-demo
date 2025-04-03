import React from 'react'
import logo from '@/assets/logo.svg'
import { Form, Button, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const Login: React.FC = () => {
  const validatePassword = (_: unknown, value: string) => {
    const newValue = value.trim()
    if (!newValue) {
      return Promise.reject('密码不能为空')
    } else if (newValue.length < 4) {
      return Promise.reject('密码长度不能小于4位')
    } else if (newValue.length > 10) {
      return Promise.reject('密码长度不能大于10位')
    } else if (!/^[a-zA-Z0-9]+$/.test(newValue)) {
      return Promise.reject('密码只能包含数字和字母')
    }
    return Promise.resolve()
  }

  return (
    <div className="w-full h-full bg-[url(@/assets/bg.png)] bg-center bg-cover">
      <div className="h-[80px] bg-[rgba(0,0,0,0.5)] flex items-center">
        <img className="w-[40px] h-[40px] mx-[20px]" src={logo} />
        <h1 className="text-[30px] text-[#ffffff]">React后台管理系统</h1>
      </div>
      <div className="flex justify-center items-center h-[calc(100%-300px)] w-full">
        <div className="w-[400px] h-auto bg-[#ffffff] rounded p-[30px]">
          <h1 className="text-[24px] font-bold text-center">用户登录</h1>
          <Form variant={'filled'} initialValues={{ username: 'admin' }}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: '用户名不能为空' },
                { min: 4, message: '用户名长度不能小于4位' },
                { max: 10, message: '用户名长度不能大于10位' },
                {
                  pattern: /^[a-zA-Z0-9]+$/,
                  message: '用户名只能包含数字和字母',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="text-[rgba(0,0,0,0.25)]" />}
                placeholder="请输入用户名"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ validator: validatePassword }]}
            >
              <Input
                prefix={<LockOutlined className="text-[rgba(0,0,0,0.25)]" />}
                type="password"
                placeholder="请输入密码"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="w-full">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
