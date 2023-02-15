import React from "react";
import dinnerMenu from '../DinnerMenu.jpg';

const aboutStyle = { marginTop: `20em` }

function Menu () {
    return (
    <div style={aboutStyle} className="ui image container">
        <img className="ui centered huge image" src={dinnerMenu} alt="Dinner Menu"></img>
    </div>
    );
}

export default Menu;