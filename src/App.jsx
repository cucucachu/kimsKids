import React, { useState } from 'react';
import './app.scss';

import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { PurposePage } from './pages/PurposePage';
import { BackgroundPage } from './pages/BackgroundPage';
import { ContactPage } from './pages/ContactPage';

const pages = ['HOME', 'BACKGROUND', 'CONTACT', 'PURPOSE'];

const App = () => {

    const [page, setPage] = useState('HOME');

    let currentPage;

    switch (page) {
        case 'HOME':
            currentPage = <HomePage/>;
            break;
        case 'PURPOSE':
            currentPage = <PurposePage/>
            break;
        case 'BACKGROUND':
            currentPage = <BackgroundPage/>;
            break;
        case 'CONTACT':
            currentPage = <ContactPage/>
            break;
        default:
            currentPage = <HomePage/>
    }

    return (
        // <h1>Hello</h1>
        <div className="page-container">
            <Header />
            {currentPage}
        </div>
    )
}

export default App;