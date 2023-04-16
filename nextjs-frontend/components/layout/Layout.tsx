import React, { Component } from 'react';

import Header from "../header/Header";
import Navigator from "../navigator/Navigator";
import Content from "../content/Content";
import Animation from "../animation/Animation";
import Footer from "../footer/Footer";

const Layout: React.FC<{content: string}> = ({ content }) => {

    return (
        <div className="mainx">
            <div className="top">
            <Header />
                <div className="animation">
                <Animation height={180} />
                </div>
                <Navigator />
            </div>

            <main>
                <div className="spacer"></div>
                <Content markdown={content} />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
