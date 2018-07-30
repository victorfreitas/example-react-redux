import React, { Component } from 'react'
import classNames from 'classnames'

class Info extends Component {
  constructor(props) {
    super(props)
  }

  getItems() {
    const list = Object.entries(this.props.address)

    return list.map(item => this.renderItem(item))
  }

  renderItem([key, value]) {
    return (
      <p key={key}>
        <span>{key}:</span> <strong>{value}</strong>
      </p>
    )
  }

  renderError() {
    return (
      <p
        className='error-message'
        dangerouslySetInnerHTML={{__html : this.props.address.error}}
      ></p>
    )
  }

  render() {
    if (this.props.address.error) {
      return this.renderError()
    }

    return (
      <div className={classNames('info', {hidden: !this.props.address.cep})}>
        {this.getItems()}
      </div>
    )
  }
}

export default Info
