import React from 'react'
import {Button} from 'antd'

interface Greeting{
  name: string,
  firstName:string,
  lastName:string
}

//FC是function component缩写
//用FC的好处函数参数中隐含声明了children属性
//用静态属性的时候有提示 .defaultProps

//坏处是即使你设置了默认值,也必须要你在组件使用的时候传每一个接口所需的参数
//普通函数写法可以运行，但FC不允许你运行 
//而且FC以后可能会被弃用,所以推荐不使用
const Hello = (props:Greeting) => <Button>Hello {props.name}</Button>


Hello.defaultProps = {
  firstName:"",
  lastName:""
}

// const Hello:React.FC<Greeting> = ({
//   name,
//   firstName,
//   lastName,
//   children
// }) => (
//   <Button>Hello {name}</Button>
// )



export default Hello