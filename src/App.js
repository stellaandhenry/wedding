import React, { useEffect } from 'react';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Place from './components/Place';
import Bus from './components/Bus';
import Family from './components/Family';
import Account from './components/Account';
import Footer from './components/Footer';
import Calendar from './components/Calendar';
import Contact from './components/Contact';

import './App.css';

function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">
            <Home />
            <Family />
            <Contact />
            <Calendar />
            <Gallery />
            <Account />
            <Bus />
            <Place />
            <Footer />
        </div>
    );
}

export default App;
