import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm';


interface Props {
  markdown: string;
}

export default class Content extends Component<Props, {}> {
  render() {
    return (
      <div className="content center">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {this.props.markdown}
      </ReactMarkdown>
      </div>
    )
  }
}
