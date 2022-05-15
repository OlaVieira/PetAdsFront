import React from 'react';
import './Header.css';
import {Btn} from "../common/Btn";

export const Header = () => {
    return (
        <header>
        <h1>
            <strong>Petsitters</strong> ads <i className="fa-solid fa-paw"></i>
        </h1>
        <Btn text="Add an add"/>
        <div className="search">
            <input type="text"/> <button className="search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </header>
    )

}

