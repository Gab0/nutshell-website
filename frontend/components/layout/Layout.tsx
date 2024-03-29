import React, { ReactNode } from 'react';

import Header from "../header/Header";
import Navigator from "../navigator/Navigator";
import Content from "../content/Content";
import Animation from "../animation/Animation";
import Footer from "../footer/Footer";

interface Layout {
    content: any,
    preamble?: ReactNode
}

export const Layout: React.FC<Layout> = ({ content, preamble }) => {

    return (
        <>
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
                    { preamble }
                    { content }
                </main>
                <Footer />
            </div>
        </>
    );
}


export const fromMarkdown = (content: string) => {

    return(<Content markdown={content} />)
}
