'use strict'

import React from 'react'
const getData = require('../lib/get-data')

export default class Timer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  async componentDidMount () {
    const data = await getData(this.props.source)
    this.setState({data: data})
  }

  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {this.state.data.map((line) => {
            return (
              <li>{line.status.toFixed(0)}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}