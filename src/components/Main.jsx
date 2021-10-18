import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Main = ({children}) => {
    return (
        <div>
           <Header/>
           <main>{children}</main>
           <Footer/>
        </div>
    )
}

export default Main
