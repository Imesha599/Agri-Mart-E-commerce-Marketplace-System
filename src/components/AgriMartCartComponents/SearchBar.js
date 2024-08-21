import React from 'react'

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            {/* <span className="visually-hidden">Search Products</span> */}
        </label>
<div class="topnav">
  
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search Products" name="search"/>
      <button type="submit">Search<i class="fa fa-search"></i></button>
    </form>
  </div>
</div>    
    </form>
);

export default SearchBar;