import React,{Component} from 'react'

import HelloClass from './HelloClass'

interface Loading {
  loading : boolean
}

//这个泛型的P是函数调用的时候被决定的，具体可以看typescript的函数泛型定义与调用
//Component引入了泛型变量就必须最外面的函数就要改造成泛型函数
function HelloHOC<P>(WrappedComponent:React.ComponentType<P>) {
  // 这波泛型的意义是保证return的class的Props要求和传进来的Props相同并且要满足Loading接口
  return class extends Component<P & Loading> {
    render(){
      const {loading , ...props} = this.props
      return loading ? <div>Loading...</div> : <WrappedComponent {...props as P} />
    }
  }
}

export default HelloHOC(HelloClass)