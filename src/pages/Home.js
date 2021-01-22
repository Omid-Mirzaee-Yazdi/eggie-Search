import React from 'react';
import { Link } from "react-router-dom";
import './home.css';
import Search from '../components/Search';
function Home() {
    return (
        <div className="home">

            <div className="home_header">
                <div className="home_header_left">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="home_header_right">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>

                </div>

            </div>

            <div className="home_body">
                <h1 className="search_title"> Eggie Search </h1>
                <div className="search_container">
                    <Search />
                </div>
            </div>

        </div>
    )
}

export default Home
