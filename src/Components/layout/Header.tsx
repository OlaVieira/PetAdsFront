import React, {SyntheticEvent, useContext, useState} from 'react';
import {Btn} from "../common/Btn";
import './Header.css';
import {SearchContext} from "../../contexts/search.context";

export const Header = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    }
    return (
        <header>
            <h1>
                <strong>Petsitters</strong> ads <i className="fa-solid fa-paw"></i>
            </h1>
            <Btn to="/add" text="Add an ad"/>
            <form className="search" onSubmit={setSearchFromLocalState}>
                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
                <button className="search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </header>
    );
};

