import React, { Component } from 'react'
import Card from './Card'

export default class Layouts extends Component {
  render() {
    return (
      <div>
        <Card header={<h1>Titulo</h1>} footer={<span>Footer</span>} />
        <Card>
          <h3>React mola</h3>
          <img width="100%" src="https://www.theblocklearning.com/wp-content/uploads/2018/09/1_qUlxDdY3T-rDtJ4LhLGkEg.png" alt=""/>
        </Card>
        <Card>
          <img width="100%" src="https://www.theblocklearning.com/wp-content/uploads/2018/09/1_qUlxDdY3T-rDtJ4LhLGkEg.png" alt=""/>
          <h4>React!!!</h4>
        </Card>
      </div>
    )
  }
}
