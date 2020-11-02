import React from 'react'

const Search = () => {
    return (
        <div className='header__search-bar'>
            <input type='text' placeholder='Search Products' className='header__search-input' />
            <button className='header__search-button pointer'>
                <i className='fa fa-search'></i>
            </button>
        </div>
    )
}

export default Search
