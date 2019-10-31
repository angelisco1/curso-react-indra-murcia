import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const styles = {
      width: '150px'
    }
    return (
      <div style={styles}>
        {/* <h2>React</h2>
        <img width="100%" src="https://www.theblocklearning.com/wp-content/uploads/2018/09/1_qUlxDdY3T-rDtJ4LhLGkEg.png" alt=""/> */}
        {this.props.header ? this.props.header : null}
        {this.props.children && this.props.children.length === 2 ? this.props.children[0] : <h2>Título</h2>}
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate doloribus officiis necessitatibus qui vel molestias temporibus, nesciunt neque delectus! Facere sed blanditiis quis dolore! Soluta eligendi ipsam eos earum quod.</p>
        {this.props.children && this.props.children.length === 2 ? this.props.children[1] : <img width="100%" src="https://www.theblocklearning.com/wp-content/uploads/2018/09/1_qUlxDdY3T-rDtJ4LhLGkEg.png" alt=""/>}
        {this.props.footer ? this.props.footer : null}
      </div>
    )
  }
}
