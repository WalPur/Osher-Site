import "bootstrap/dist/css/bootstrap.min.css"

import Components from "../components";
import React from "react";

function Home() {
    return(
        <div>
            <Components.Header />
            <div id="ContentFrame">
                <Components.MainFrame />
                <Components.ItSolutions />
                <Components.Directions />
                <Components.OurProjects />
                <Components.Competence />
                <Components.Clients />
                <Components.Footer />
            </div>
        </div>
    )
}

export default Home;