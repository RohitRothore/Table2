import React, { useState } from "react";

const Search = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const onInputChange = value => {
        setSearch(value);
        onSearch(value);
    };
    return (
        // <div className="float-left">
        //                 <select className="form-control selectric">
        //                     <option>10</option>
        //                     <option>25</option>
        //                     <option>100</option>
        //                     <option>Show All</option>
        //                 </select>
        //             </div>
        <div className="float-right">    
            <div className="input-group">
                <input
                    type="text"                     // CSS Changes....
                    className="form-control "
                    style={{ width: "240px" }}
                    placeholder="Search"
                    value={search}
                    onChange={e => onInputChange(e.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary"><i className="fas fa-search"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Search;
