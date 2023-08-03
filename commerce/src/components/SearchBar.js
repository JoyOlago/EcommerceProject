

import React from "react";
import searchIcon from '../Assets/SearchBar/search.svg'

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="container" style={{backgroundColor:"#1D7773", padding:"20px", textAlign:"center", width:"400px", height:"80px", borderRadius:"20px"}}>
      <div style={{}}>
        <div style={{backgroundColor:"#1D7773"}}>
          <div className="row">
            <div className="col" style={{}}>
              {/* <h5>Search</h5> */}
              <img src={searchIcon} style={{width:"30px", height:"30px"}}></img>
            </div>
            <div className="col-10" style={{}}>
            <input
            type="text"
            placeholder="Type your term here"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{}}
            />
          </div>
          </div>

        </div>
      </div>

    </div>

  );
};

export default SearchBar;
