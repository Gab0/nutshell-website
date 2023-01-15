import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default class Content extends Component {

  constructor(props) {
    super(props);
    this.state = { markdown: props.markdown };
  }

  render() {
    return (
      <div className="main">
      <ReactMarkdown children={this.state.markdown} remarkPlugins={[remarkGfm]} />
      </div>
    )
  }
}
