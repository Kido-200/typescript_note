import React from 'react'
import {Route , Link ,Switch} from 'react-router-dom'
import {Layout,Menu,ConfigProvider} from 'antd'
import zh_CH from 'antd/lib/locale/zh_CN'

import './App.css'

import Employee from './employee'
import Setting from './setting'


const { Header, Content, Footer } = Layout;

const App = ({location} : any) => {
  let defaultKey = location.pathname.replace('/','' ) || 'employee'
  
  return (
  <ConfigProvider locale={zh_CH}>
    <Layout>

      <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[defaultKey]}>
        <Menu.Item key="employee"><Link to="/employee">员工管理</Link></Menu.Item>
        <Menu.Item key="setting"><Link to="/setting">系统设置</Link></Menu.Item>
      </Menu>
      </Header>

      <Content className="contentWrap">
        <div className="content">
          <Switch>
            <Route path="/" exact component={Employee}></Route>
            <Route path="/employee" exact component={Employee}></Route>
            <Route path="/setting" exact component={Setting}></Route>
          </Switch>
        </div>
      </Content>

      <Footer className="footer">Typescript</Footer>
    </Layout>
  </ConfigProvider>
  )
}

export default App