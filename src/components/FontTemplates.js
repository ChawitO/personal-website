import React, { Component } from 'react'

export default class FontTemplates extends Component {
  render() {
    return (
      <>
        <h1>This is H1</h1>
        <h1>{'<This is H1>'}</h1>
        <h2>{'<This is H2>'}</h2>
        <h3>This is H3</h3>
        <h4>This is H4</h4>
        <p>This is paragraph text.</p>
        <button>Button</button>
      </>
    )
  }
}
