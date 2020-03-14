import React from 'react';
import Search from './SearchField';
import SearchBody from './searchBody/SearchBody';

const Scoreboard = () => {
    return ( 
        <>
            <h1 className="scoreboard__title">Search Flight</h1>
            <Search />
            <SearchBody />
        </>
     );
};
 
export default Scoreboard;