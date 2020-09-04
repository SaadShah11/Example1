import React from 'react';
import './home.css';
import './recipe.css';
import * as ReactBootstrap from "react-bootstrap";
function Recipe() {

    return (

        <div className="head">

            <div className="logo"> <img src="/img/logo.png" alt="" /><hr /></div>
            <div className="pc">
                <p className="cat">Categories: </p>
                <p className="caat"> Recipes</p>
            </div>

        </div>



    );
}
export default Recipe;
