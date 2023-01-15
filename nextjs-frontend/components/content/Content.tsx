import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


interface Props {
  markdown: string;
}

export default class Content extends Component<Props, {}> {
  render() {
    return (
      <div className="main">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {this.props.markdown}
      </ReactMarkdown>
      </div>
    )
  }
}
