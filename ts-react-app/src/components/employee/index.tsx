import React,{Component} from 'react'
import {Table} from 'antd'

import './index.css'

import QueryForm from './QueryForm'

import {employeeColumns} from './columns'
import {EmployeeResponse} from '../../interface/employee'

interface State {
  employee: EmployeeResponse
}

class Employee extends Component<{},State>{

  state:State = {
    employee: undefined
  }

  getTotal = () => {
    let total:number;
    if(typeof this.state.employee !== 'undefined'){
      total = this.state.employee.length
    }else{
      total = 0
    }
    return <p>共有 {total} 名员工</p>
  }

  setEmployee = (employee:EmployeeResponse) => {
    this.setState({
      employee
    })
  }

  render(){
    return (
      <>
        <QueryForm onDateChange={this.setEmployee}/>
        {this.getTotal()}
        <Table columns={employeeColumns} className="table" dataSource={this.state.employee}></Table>
      </>
    )
  }
}

export default Employee