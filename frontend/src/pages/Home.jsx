import "bootstrap/dist/css/bootstrap.min.css"

import Components from "../components";
import React from "react";

function Home() {
    return(
        <div>
            <Components.Header />
            <Components.MainFrame />
            <Components.ItSolutions />
            <Components.Directions />
            <Components.OurProjects />

            <Components.Footer />
        </div>
    )
}

export default Home;