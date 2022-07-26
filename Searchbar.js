import React from 'react';

function Searchbar({ placeholder, data }) {
    return (
        <div className="searchBar-container">
            <div className="searchicon">
                <img
                    src="sar.jpg"
                    alt="" width={"34.8px"} height={"25.03rem"}
                />
            </div>
            <div className="voiceicon">
                <img
                    src="m.jpg"
                    alt="" width={"23.5px"} height={"25.6rem"}
                />
            </div>
            <div className="inline-box"></div>
        </div>
    );
}
export default Searchbar;