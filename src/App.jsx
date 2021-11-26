import React, { useEffect, useState, useMemo } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom"

import NavBar from '@/components/NavBar';

import { ConfigProvider } from 'zarm'

import routes from '@/router'
function App() {
  const location = useLocation() // 拿到 location 实例
  const { pathname } = location // 获取当前路径
  console.log(pathname)
  const needNav = ['/', '/data', '/user'] // 需要底部导航栏的路径
  const [showNav, setShowNav] = useState(false) // 是否展示 Nav
  useMemo(() => {
    setShowNav(needNav.includes(pathname))
  }, [pathname]) // [] 内的参数若是变化，便会执行上述回调函数=
  return <>
    <ConfigProvider primaryColor={'#007fff'}>
      <Switch>
        {
          routes.map(route => <Route exact key={route.path} path={route.path}>
            <route.component />
          </Route>)
        }
      </Switch>
    </ConfigProvider>
    <NavBar showNav={showNav} />
  </>
}

export default App