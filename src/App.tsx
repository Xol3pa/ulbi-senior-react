import React, { Suspense, useContext, useState } from 'react';
import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';


const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', { 'selected': true, 'hovered': true }, [theme])}>

            <button onClick={toggleTheme}>TOGGLE</button>

            <Link to='/about'>AboutPage</Link>
            <Link to='/'>MainPage</Link>

            <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync />} />
                    <Route path='/' element={<MainPageAsync />} />
                </Routes>
            </Suspense>

        </div>
    )
}

export default App