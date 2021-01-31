import React,{useState,useEffect} from 'react'
import {Button} from 'antd'

interface Greeting{
  name: string,
  firstName:string,
  lastName:string
}

const HelloHooks = (props:Greeting) => {
  const [count,setCount] = useState(0)
  const [text, setText] = useState<null | string>(null)
  useEffect(()=>{
    if(count > 5){
      setText('休息一下吧')
    }
  },[count])
  return (
    <>
      <p>你点击了 {count}次 {text}</p>
      <Button 
      onClick={() => {setCount(prevState => prevState + 1)}}>
        Hello {props.name}</Button>

    </>
  )
}


HelloHooks.defaultProps = {
  firstName:"",
  lastName:""
}


export default HelloHooks