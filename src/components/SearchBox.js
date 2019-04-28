import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className="search_box">
            <input type="search" placeholder="Search robots..." onChange={searchChange} />
        </div>
    );
};

export default SearchBox;