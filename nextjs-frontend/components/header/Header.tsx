import React, { Component } from 'react';

import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default class Header extends Component {
  render() { return (
    <>
      <header>
      <div className="main">
        <section className={inter.className}>
          <h1>nutshell</h1>
          <p>Bioinformatics and Software Development</p>
        </section>
      </div>
      </header>
    </>
  )
}
}
