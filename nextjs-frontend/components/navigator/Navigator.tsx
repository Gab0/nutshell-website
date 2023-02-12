
import React, { Component } from 'react';

import Link from 'next/link';

function MenuLink(address: string, identifier: string) {
  return (
    <>
      <Link href={address} className="title-button">{identifier}</Link>
    </>
  )
}


export default class Navigator extends Component {


    render() {
        return (
            <>
      <section className="navbar">
            {MenuLink("/", "About")}
            {MenuLink("/projects", "Past Projects")}
            {MenuLink("/services", "Web Services")}
      </section>
    </>

        )
    }
}
