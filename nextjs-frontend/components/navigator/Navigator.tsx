
import React, { Component } from 'react';

import Link from 'next/link';

function MenuLink(address: string, identifier: string) {
  return (
    <>
      <Link href={address} className="nav-button">{identifier}</Link>
    </>
  )
}


export default class Navigator extends Component {


    render() {
        return (
            <>
      <section className="main">
            {MenuLink("/", "About")}
            {MenuLink("/blog", "Blog")}
            {MenuLink("/projects", "Projects")}
            {MenuLink("/tools", "Tools")}
            {MenuLink("/services", "Services")}
      </section>
    </>

        )
    }
}
