import "bootstrap/dist/css/bootstrap.min.css"

import Components from "../components";
import React from "react";

function Home() {
    return(
        <div>
            <Components.Header />
            <Components.mainFrame />
        </div>
    )
}

export default Home;