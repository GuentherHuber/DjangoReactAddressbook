import React from "react";
import {Link} from "react-router-dom";

function Welcome(){
    return(
        <>
            <h1>Willkommen</h1>
            <p>Verfügbare Funktionen:</p>
            <Link to="/addressbook">- Adressbuch</Link>
        </>
    )
}

export default Welcome