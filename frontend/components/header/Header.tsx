import React from 'react';

import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

const Header = () => {
  const height = "8em";
      return (
          <>
              <header>
                <div className="header" style={{height: height}}>
                      <section className={inter.className + " title"}>
                          <h1>nutshell</h1>
                          <p>Bioinformatics and Software Development</p>
                      </section>
                  </div>
              </header>
          </>
      )

}

export default Header;
