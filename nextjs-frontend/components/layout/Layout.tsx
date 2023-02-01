import React, { Component } from 'react';

import Header from "../header/Header";
import Navigator from "../navigator/Navigator";
import Content from "../content/Content";
import Animation from "../animation/Animation";

export default class Layout extends Component<{content: string}, {}> {
    render() {
        return (
            <>
                <Header />
                <main>
                    <Animation />
                    <Navigator />
                    <Content markdown={this.props.content} />
                </main>
            </>
        );
    }
}
