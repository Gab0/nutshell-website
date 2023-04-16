import React from 'react';

import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

const Header = () => {
      return (
          <>
              <header>
                  <div className="header">
                      <section className={inter.className}>
                          <h1>nutshell</h1>
                          <p>Bioinformatics and Software Development</p>
                      </section>
                  </div>
              </header>
          </>
      )

}

export default Header;
