
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
        {MenuLink("/", "Provided Services")}
        {MenuLink("/projects", "Projects")}
        {MenuLink("/services", "Web Services")}
        {MenuLink("/contact", "Contact")}
      </section>
    </>

        )
    }
}
